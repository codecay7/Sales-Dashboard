import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface CustomerVolumeProps {
  total: number;
  growth: number;
}

const CustomerVolume = ({ total, growth }: CustomerVolumeProps) => {
  const [displayTotal, setDisplayTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const duration = 2000;
    const steps = 60;
    const stepValue = total / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= total) {
        setDisplayTotal(total);
        clearInterval(timer);
        setIsLoading(false);
      } else {
        setDisplayTotal(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [total]);

  // Create data for the gauge chart
  const data = [
    { value: displayTotal },
    { value: 200 - displayTotal } // Assuming 200 is the max value
  ];

  return (
    <div 
      className="card hover:shadow-xl transition-all duration-300  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Customers Volume</h3>
          <button className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50">
            i
          </button>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">⋮</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-48 h-32">
          {isLoading ? (
            <div className="animate-pulse bg-gray-200 w-full h-full rounded-full"></div>
          ) : (
            <>
              <PieChart width={192} height={128}>
                <Pie
                  data={data}
                  cx={96}
                  cy={96}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={0}
                  dataKey="value"
                  animationDuration={1000}
                >
                  <Cell fill={isHovered ? "#c3ff00" : "#D4FF42"} />
                  <Cell fill="#F3F4F6" />
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold transition-all duration-300">
                  {Math.round(displayTotal)}
                </span>
                <span className="text-sm text-gray-500">New Customer</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Your customer volume has increased
          </p>
          <p className="text-success text-sm mt-1 flex items-center justify-center gap-1">
            <span className="transform transition-transform hover:scale-110">↑</span>
            <span>{growth}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerVolume; 