import { Spin } from "antd";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const OrderBlock = () => {
  const { data, error, isLoading } = useCurrencies();

  if (isLoading) {
    return <Spin size="default" />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="overflow-x-scroll overflow-y-visible h-full lg:p-5 p-1">
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="grid grid-cols-1 gap-4 h-[40px] text-[10px]">
          {data?.map((crypto) => (
            <div
              key={crypto.id}
              className={`flex h-[20px] justify-between items-center p-4    rounded-md ${
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
    </div>
  );
};

export default OrderBlock;
