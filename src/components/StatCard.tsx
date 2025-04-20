import { useState, useEffect } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  growth: number;
  isDark?: boolean;
}

const StatCard = ({ title, value, growth, isDark = false }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
        setIsLoading(false);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className={`card stat-card ${isDark ? 'bg-primary text-white' : 'bg-white'} transition-all duration-300 hover:shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <button className={`w-5 h-5 rounded-full border ${isDark ? 'border-white/20' : 'border-gray-200'} flex items-center justify-center text-sm hover:bg-gray-50`}>
            i
          </button>
        </div>
        <button className="p-1 hover:bg-opacity-10 hover:bg-white rounded">
          ⋮
        </button>
      </div>
      
      <div>
        <div className="text-3xl font-bold transition-all duration-300">
          {isLoading ? (
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
          ) : (
            formatValue(displayValue)
          )}
        </div>
        <div className={`flex items-center mt-2 text-sm ${
          growth >= 0 
            ? isDark ? 'text-accent' : 'text-success' 
            : 'text-error'
        }`}>
          <span className="mr-1 transition-transform duration-300 hover:scale-110">
            {growth >= 0 ? '↑' : '↓'}
          </span>
          {Math.abs(growth)}% vs last month
        </div>
      </div>
    </div>
  );
};

export default StatCard; 