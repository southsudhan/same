import Header from "../Header/Header";
import BuySellCurrencies from "./BuySellCurrencies/BuySellCurrencies";
import ChartCurrencies from "./ChartCurrencies/ChartCurrencies";
import Currencies from "./Currencies/Currencies";
import SwapCurrencies from "./SwapCurrencies/SwapCurrencies";

const Main = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col ">
        <div className="  justify-end items-center   mt-24  flex">
          <div className="flex flex-col mr-2  gap-3">
            <BuySellCurrencies />
            <SwapCurrencies />
          </div>
          <ChartCurrencies />
        </div>
      </div>
      <div className=" w-full gap-4 justify-between items-center flex  mt-6">
        <Currencies />
      </div>
    </div>
  );
};

export default Main;
