import { Card, Spin } from "antd";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

const OrderBlock = () => {
  const { data, error, isLoading } = useCurrencies();

  if (isLoading) {
    return <Spin size="default" />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card
      title="Order Block"
      size="default"
      className="overflow-y-scroll overflow-x-clip  h-[700px] lg:w-full w-screen " 
    >
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="grid grid-cols-1 gap-2 h-[40px] text-[10px]">
          {data?.map((crypto) => (
            <div
              key={crypto.id}
              className={`flex h-[20px] justify-between items-center p-5 rounded-md ${
                crypto.price_change_percentage_24h > 0
                  ? "bg-green-100"
                  : crypto.price_change_percentage_24h < 0
                  ? "bg-red-100"
                  : "bg-gray-100"
              }
                `}
            >
              <span>
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </span>
              <span>${crypto.market_cap.toLocaleString()}</span>
              <span
                className={
                  crypto.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default OrderBlock;
