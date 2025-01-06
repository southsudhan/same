import { Spin } from "antd";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const OrderBlock = () => {
  const { data, error, isLoading } = useCurrencies();

  return (
    <div>
      <div className=" text-sm overflow-x-scroll h-[550px] p-5">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <div className="grid grid-cols-1 gap-4 h-[40px] text-[12px]">
            {data?.map((crypto) => (
              <div
                key={crypto.id}
                className={`flex h-[20px] justify-between items-center p-4  rounded-md ${
                  crypto.price_change_percentage_24h > 0
                    ? "bg-green-100"
                    : crypto.price_change_percentage_24h < 0
                    ? "bg-red-100"
                    : "bg-gray-100"
                }`}
              >
                <span>
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </span>
                <span>${crypto.current_price.toLocaleString()}</span>
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
    </div>
  );
};

export default OrderBlock;
