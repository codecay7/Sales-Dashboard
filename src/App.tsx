import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import UserGrowth from './components/UserGrowth';
import CustomerVolume from './components/CustomerVolume';
import Statistics from './components/Statistics';
import TopOrders from './components/TopOrders';
import { mockStats } from './data/mockStats';

const orders = [
  {
    id: 1,
    city: "New York",
    product: "Jersey graphic short tee",
    orders: 520,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    city: "Los Angeles",
    product: "Floral mesh midi dress",
    orders: 452,
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    city: "Chicago",
    product: "Stripe knitted crop tank top",
    orders: 320,
    image:
      "https://images.pexels.com/photos/3755704/pexels-photo-3755704.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    city: "Houston",
    product: "Denim high-waisted shorts",
    orders: 280,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready before showing animation
    const animTimer = setTimeout(() => setShowAnimation(true), 50);
    
    // Data loading timer
    const dataTimer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(dataTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        {showAnimation && (
          <DotLottieReact
            src="https://lottie.host/f51b20f8-9004-450a-b266-7e4fb6b46de7/L7T6b5AOmP.lottie"
            loop
            autoplay
            style={{ width: '300px', height: '300px' }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-black">
      <Navbar />
      
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4 sm:gap-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Sales Overview</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Your current sales summary and activity
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
              <select className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border bg-white text-sm min-w-[120px]">
                <option>Default View</option>
              </select>
              <button className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border bg-white text-sm">
                Export
              </button>
              <button className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-primary text-white text-sm">
                Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="w-full">
              <StatCard
                title="Total Sales"
                value={mockStats.totalSales}
                growth={mockStats.salesGrowth}
                isDark
              />
            </div>
            
            <div className="w-full">
              <StatCard
                title="Total Purchase"
                value={mockStats.totalPurchases}
                growth={mockStats.purchaseGrowth}
              />
            </div>
            
            <div className="w-full">
              <StatCard
                title="Average Order"
                value={mockStats.averageOrder}
                growth={mockStats.averageOrderGrowth}
              />
            </div>
            
            <div className="w-full">
              <StatCard
                title="Monthly Revenue"
                value={mockStats.monthlyRevenue}
                growth={mockStats.monthlyRevenueGrowth}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="lg:col-span-8">
              <Statistics
                satisfaction={mockStats.customerSatisfaction}
                weeklyStats={mockStats.weeklyStats}
              />
            </div>
            
            <div className="lg:col-span-4">
              <TopOrders orders={orders} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="w-full">
              <UserGrowth
                total={mockStats.userGrowth.total}
                today={mockStats.userGrowth.today}
                percentage={mockStats.userGrowth.percentage}
              />
            </div>
            
            <div className="w-full">
              <CustomerVolume
                total={mockStats.customerVolume.total}
                growth={mockStats.customerVolume.growth}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;