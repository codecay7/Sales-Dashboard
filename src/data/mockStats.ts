export const mockStats = {
  totalSales: 487592,
  totalPurchases: 240548,
  salesGrowth: 10,
  purchaseGrowth: -4,
  averageOrder: 1250,
  averageOrderGrowth: 15,
  monthlyRevenue: 156480,
  monthlyRevenueGrowth: 8,
  userGrowth: {
    total: 192230,
    today: 120,
    percentage: 15
  },
  customerVolume: {
    total: 120,
    growth: 15
  },
  customerSatisfaction: 72,
  weeklyStats: [
    { day: "Mon", value: 10 },
    { day: "Tue", value: 4 },
    { day: "Wed", value: 7 },
    { day: "Thu", value: 15 },
    { day: "Fri", value: 9 },
    { day: "Sat", value: -4 },
    { day: "Sun", value: 6 }
  ],
  topOrders: [
    {
      id: 1,
      city: "San Francisco",
      product: "Jersey graphic short tee",
      orders: 520,
      image: "/product1.jpg"
    },
    {
      id: 2,
      city: "Los Angeles",
      product: "Floral mesh midi dress",
      orders: 452,
      image: "/product2.jpg"
    },
    {
      id: 3,
      city: "San Diego",
      product: "Stripe knitted crop tank top",
      orders: 320,
      image: "/product3.jpg"
    }
  ]
}; 