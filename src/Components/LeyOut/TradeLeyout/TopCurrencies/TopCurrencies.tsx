import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

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
    return <p>network is error : {error.message}</p>;
  }

  return (
    <div className="flex justify-center items-center gap-0 w-full lg:overflow-hidden overflow-scroll lg:text-sm text-xs ">
      <div className="flex w-full gap-1">
        {topGainers.map((item: CurrenciesModel) => (
          <div
            key={item.id}
            className="flex flex-col justify-evenly border items-center border-gray-100 rounded-md w-[130px] p-2 text-[10px] hover:border hover:border-orange-200 "
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
      <div className="flex justify-center gap-1">
        {topLosers.map((item: CurrenciesModel) => (
          <div
            key={item.id}
            className=" flex flex-col justify-evenly items-center h-[60px] border border-gray-100 rounded-md p-1 w-[130px] text-[10px] hover:border hover:border-orange-200"
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
