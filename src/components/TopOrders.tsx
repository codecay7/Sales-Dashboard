interface OrderItem {
  id: number;
  city: string;
  product: string;
  orders: number;
  image: string;
}

interface TopOrdersProps {
  orders: OrderItem[];
}

const TopOrders = ({ orders }: TopOrdersProps) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base sm:text-lg font-medium">
            Most Orders by Country
          </h3>
          <button className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50">
            i
          </button>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">⋮</button>
      </div>

      <div className="space-y-3">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`flex items-center p-3 sm:p-4 rounded-xl ${
              index === 0
                ? "bg-primary text-white"
                : index === 1
                ? "bg-blue-100"
                : "bg-accent"
            }`}
          >
            <div className="w-10 h-10 aspect-square rounded-full overflow-hidden bg-white mr-3 sm:mr-4 flex-shrink-0">
              <img
                src={order.image}
                alt={order.product}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4
                className={`font-medium text-sm sm:text-base truncate ${
                  index === 0 ? "text-white" : "text-gray-800"
                }`}
              >
                {order.product}
              </h4>
              <p
                className={`text-xs sm:text-sm truncate ${
                  index === 0 ? "text-white opacity-90" : "text-gray-600"
                }`}
              >
                {order.orders.toLocaleString()} orders in 30 days
              </p>
            </div>

            <div className="flex items-center gap-2 ml-2 flex-shrink-0">
              <span
                className={`text-xs sm:text-sm font-medium ${
                  index === 0 ? "text-white" : "text-gray-700"
                }`}
              >
                #{index + 1}
              </span>
              <span
                className={`text-xs sm:text-sm font-medium hidden sm:block ${
                  index === 0 ? "text-white" : "text-gray-700"
                }`}
              >
                {order.city}
              </span>
              <span
                className={`text-xs sm:text-sm font-medium sm:hidden ${
                  index === 0 ? "text-white" : "text-gray-700"
                }`}
              >
                {order.city.split(" ")[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOrders;
