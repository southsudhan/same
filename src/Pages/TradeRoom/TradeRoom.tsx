import { Card } from "antd";
import Header from "../../Components/Header/Header";
import BuySellCurrencies from "../../Components/LeyOut/TradeLeyout/BuySellCurrencies/BuySellCurrencies";
import ChartCurrencies from "../../Components/LeyOut/TradeLeyout/ChartCurrencies/ChartCurrencies";
import SwapCurrencies from "../../Components/LeyOut/TradeLeyout/SwapCurrencies/SwapCurrencies";

const TradeRoom = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-5 h-screen">
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
