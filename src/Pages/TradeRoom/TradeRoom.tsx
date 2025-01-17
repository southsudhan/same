import Header from "../../Components/Header/Header";
import BuySellCurrencies from "../../Components/TradeLeyout/BuySellCurrencies/BuySellCurrencies";
import ChartCurrencies from "../../Components/TradeLeyout/ChartCurrencies/ChartCurrencies";
import SwapCurrencies from "../../Components/TradeLeyout/SwapCurrencies/SwapCurrencies";

const TradeRoom = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col ">
        <div className="justify-between items-center  gap-2  lg:mt-0 mt-16  flex h-screen">
          <div className="lg:flex flex-col hidden gap-3">
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
