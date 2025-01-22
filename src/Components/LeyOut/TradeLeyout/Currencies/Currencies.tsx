import React from "react";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

const CurrencyTable: React.FC = () => {
  const { data, error, isLoading } = useCurrencies();

  if (isLoading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-5">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="overflow-x-scroll  w-[99%] p-5 h-[700px]">
      <table className="w-full table-auto overflow-y-scroll">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="px-4 py-2">Currency</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Current Price</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">24h Change</th>
          </tr>
        </thead>
        <tbody className="bg-transparent">
          {data?.map((currency: any) => (
            <tr
              key={currency.id}
              className="text-center border-b hover:bg-gray-100"
            >
              <td className="px-4 py-2 flex text-center">
                <img
                  src={currency.image}
                  alt={currency.name}
                  className="inline-block w-6 h-6 mr-2"
                />
                <p>{currency.name}</p>
              </td>
              <td className="px-4 py-2">{currency.symbol.toUpperCase()}</td>
              <td className="px-4 py-2">
                ${currency.current_price.toFixed(2)}
              </td>
              <td className="px-4 py-2">
                ${currency.market_cap.toLocaleString()}
              </td>
              <td
                className={`px-4 py-2 ${
                  currency.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {currency.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
