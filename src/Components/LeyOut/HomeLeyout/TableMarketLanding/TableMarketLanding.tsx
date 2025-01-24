import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

const TableMarketLanding = () => {
  const { data, error, isLoading } = useCurrencies();

  // Ensure we only display top 5 currencies based on market performance
  const topCurrencies = data ? data.slice(0, 5) : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 r opacity-90 lg:w-2/3 w-full lg:ml-80 ml-0 mt-10 ">
      <h2 className="text-xl font-semibold text-center mb-10">
        Top Currencies
      </h2>
      <table className="min-w-full text-center ">
        <thead>
          <tr className="text-center text-orange-500">
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">7D</th>
          </tr>
        </thead>
        <tbody>
          {topCurrencies.map((currency) => (
            <tr key={currency.symbol}>
              <td className=" px-4 py-2 items-center flex gap-2 justify-center">
                <img src={currency.image} width={20} alt="" />
                {currency.symbol}
              </td>
              <td className=" px-4 py-2">{`$${currency.current_price}`}</td>
              <td className=" px-4 py-2">
                <span
                  className={`font-semibold ${
                    currency.low_24h > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {currency.high_24h > 0 ? "▲" : "▼"} {currency.high_24h}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMarketLanding;
