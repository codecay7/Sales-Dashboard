import { useState, useEffect } from 'react';

const timePeriods = ['12h', '24h', 'A Week', 'A Month'] as const;
type TimePeriod = typeof timePeriods[number];

interface UserGrowthProps {
  total: number;
  today: number;
  percentage: number;
}

const UserGrowth = ({ total, today, percentage }: UserGrowthProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('12h');
  const [displayTotal, setDisplayTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="card hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">User Growth</h3>
          <button className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50">
            i
          </button>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">⋮</button>
      </div>

      <div className="flex space-x-2 mb-6">
        {timePeriods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
              selectedPeriod === period
                ? 'bg-primary text-white shadow-lg'
                : 'hover:bg-gray-100'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 h-10 w-48 rounded"></div>
        ) : (
          <div className="text-4xl font-bold animate-fadeIn">
            {Math.round(displayTotal).toLocaleString()}
          </div>
        )}
        
        <div className="relative">
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
            <div className="bg-accent text-xs px-1 rounded">
              {percentage}%
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm">
          <span className="text-success flex items-center gap-1">
            <span className="transform transition-transform hover:scale-110">↑</span>
            {percentage}%
          </span>
          <span className="mx-2 text-gray-300">·</span>
          <span className="text-gray-600">+{today} today</span>
        </div>
      </div>
    </div>
  );
};

export default UserGrowth; 