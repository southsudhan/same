import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

interface CurrenciesModel {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
  atl_date: string;
}

const TopCurrencies = () => {
  const { data, error, isLoading } = useCurrencies();

  const sortedData =
    data?.sort(
      (a: CurrenciesModel, b: CurrenciesModel) =>
        b.price_change_percentage_24h - a.price_change_percentage_24h
    ) || [];
  const topGainers = sortedData.slice(0, 5);
  const topLosers = sortedData.slice(-5);

  if (error && error instanceof Error) {
    return <p>خطا در دریافت داده‌ها: {error.message}</p>;
  }

  return (
    <div className="flex justify-start items-center gap-1 w-[97%] lg:overflow-hidden overflow-scroll lg:text-sm text-xs">
      <div className="flex w-full gap-2">
        {topGainers.map((item: CurrenciesModel) => (
          <div
            key={item.id}
            className="flex flex-col justify-evenly border items-center border-gray-200 rounded-md w-[140px] h-[60px] "
          >
            <p>{item.name}</p>
            <p className="text-green-500">
              {" "}
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-center gap-2">
        {topLosers.map((item: CurrenciesModel) => (
          <div
            key={item.id}
            className=" flex flex-col justify-evenly items-center border border-gray-200 rounded-md p-2 w-[140px] h-[60px] "
          >
            <p>{item.name}: </p>{" "}
            <p className="text-red-500">
              {" "}
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCurrencies;
