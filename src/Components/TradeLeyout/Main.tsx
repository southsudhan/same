import Header from "../Header/Header";
import BuySellCurrencies from "./buySellCurrencies/buySellCurrencies";
import ChartCurrencies from "./ChartCurrencies/ChartCurrencies";
import Currencies from "./Currencies/Currencies";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col ">
        <div className="w-[99%] gap-4 justify-between items-center flex">
          <BuySellCurrencies />
          <ChartCurrencies/>
        </div>
        <div>
          <Currencies />
        </div>
      </div>
    </div>
  );
};

export default Main;
