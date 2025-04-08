import { useEffect, useState } from "react";
// import CandlestickChart from "./CandlestickChart";
import { Alert, Card, Select, Spin } from "antd";
import TopCurrencies from "../TopCurrencies/TopCurrencies";
import OrderBlock from "../OrderBlock/OrderBlock";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

interface Crypto {
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

const ChartCurrencies = () => {
  const { data, error, isLoading } = useCurrencies();
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      createWidget();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [selectedCrypto]);

  const createWidget = () => {
    if (typeof (window as any).TradingView !== "undefined" && selectedCrypto) {
      new (window as any).TradingView.widget({
        width: "100%",
        height: 500,
        symbol: `BINANCE:${selectedCrypto?.toUpperCase()}USD`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart",
      });
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const chartContainer = document.getElementById("chart-container");
      if (chartContainer) {
        chartContainer.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    setSelectedCrypto("btc");
  }, []);

  const handleCryptoSelect = (id: string) => {
    setSelectedCrypto(id);
  };

  if (error)
    return <Alert message="Error loading currencies" type="error" showIcon />;

  return (
    <div className="flex w-[100%] flex-col ">
      <div className="flex flex-col justify-center gap-3 w-[100%] ">
        <TopCurrencies />
        <div className="lg:flex grid justify-start items-center gap-2 lg:overflow-hidden overflow-scroll lg:px-0 px-5">
          <Select
            className="lg:w-[350px] w-[320px] h-[40px] lg:mb-0 mb-2"
            placeholder="Select a cryptocurrency"
            onChange={handleCryptoSelect}
            allowClear
            showSearch
          >
            {data?.map((crypto: Crypto) => (
              <Select.Option key={crypto.id} value={crypto.id}>
                {crypto.name}
              </Select.Option>
            ))}
          </Select>
          <div className="lg:flex hidden gap-2 lg:overflow-hidden overflow-scroll">
            {data?.slice(0, 7).map((crypto: Crypto) => (
              <div
                key={crypto.id}
                className="flex justify-center gap-1 items-center w-[150px]  h-[40px] text-[12px] border border-gray-100 rounded-md p-1.5 cursor-pointer"
                onClick={() => handleCryptoSelect(crypto.id)}
              >
                <img src={crypto.image} alt={crypto.name} width={20} />
                <p>{crypto.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[100%] lg:flex grid lg:justify-between justify-evenly gap-2">
          <Card
            title={`${selectedCrypto} Chart`}
            id="chart-container"
            className="border border-gray-100 rounded-md p-0 lg:w-4/5 h-full"
          >
            {isLoading || !data ? (
              <Spin tip="Loading ..." />
            ) : (
              <>
                {selectedCrypto ? (
                  <>
                    {/* <TimeFarmChart /> */}
                    <button onClick={toggleFullScreen}>
                      {isFullScreen ? <BiExitFullscreen /> : <BiFullscreen />}
                    </button>
                    <div className="lg:flex grid justify-between items-center -mb-20 border-b h-[10vh] "></div>
                    <div id="tradingview_chart"></div>
                  </>
                ) : (
                  <p>Select a cryptocurrency to see the chart.</p>
                )}
              </>
            )}
          </Card>
          <div className="lg:w-1/4 w-screen rounded-md ">
            <OrderBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCurrencies;
