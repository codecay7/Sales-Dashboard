import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface WeeklyStats {
  day: string;
  value: number;
}

interface StatisticsProps {
  satisfaction: number;
  weeklyStats: WeeklyStats[];
}

const tabs = ['Customer Satisfaction', 'Visitor Insight', 'Weekly'] as const;
type Tab = typeof tabs[number];

const Statistics = ({ satisfaction, weeklyStats }: StatisticsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('Customer Satisfaction');

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Statistics</h3>
          <button className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-sm">
            i
          </button>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">⋮</button>
      </div>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold">+{satisfaction}%</div>
        <p className="text-gray-600 mt-2">
          Customer satisfaction increases every weeks
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyStats}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Bar
              dataKey="value"
              fill="#D4FF42"
              radius={[4, 4, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics; 