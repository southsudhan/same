import Header from "../../Components/Header/Header";
import BuySellCurrencies from "../../Components/TradeLeyout/BuySellCurrencies/BuySellCurrencies";
import ChartCurrencies from "../../Components/TradeLeyout/ChartCurrencies/ChartCurrencies";
import SwapCurrencies from "../../Components/TradeLeyout/SwapCurrencies/SwapCurrencies";

const TradeRoom = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen px-5">
        <div className="justify-between items-center  mt-28 gap-2 flex">
          <div className="lg:flex flex-col hidden gap-3 w-2/5">
            <BuySellCurrencies />
            <SwapCurrencies />
          </div>
          <ChartCurrencies />
        </div>
      </div>
    </>
  );
};

export default TradeRoom;
