import { useEffect, useState } from "react";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";
import CandlestickChart from "./CandlestickChart";
import { Select, Spin } from "antd";
import TopCurrencies from "../TopCurrencies/TopCurrencies";
import OrderBlock from "../OrderBlock/OrderBlock";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import TimeFarmChart from "../../TimeFarmChart/TimeFarmChart";

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
  const [candlestickData, setCandlestickData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fetchCandlestickData = async (id: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=7`
    );
    const data = await response.json();

    const formattedData = data.map((item: any) => ({
      time: item[0] / 1000,
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
    }));

    setCandlestickData(formattedData);
    setSelectedCrypto(id);
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
    fetchCandlestickData("bitcoin");
  }, []);

  return (
    <div className="flex w-[100%] flex-col ">
      <div className="flex flex-col justify-center gap-4 w-[100%] ">
        <TopCurrencies />
        <div className="flex justify-start items-center gap-2 lg:overflow-hidden overflow-scroll">
          <Select
            className="w-[300px]"
            placeholder="Select a cryptocurrency"
            onChange={fetchCandlestickData}
            allowClear
            showSearch
          >
            {data?.map((crypto: Crypto) => (
              <Select.Option key={crypto.id} value={crypto.id}>
                {crypto.name}
              </Select.Option>
            ))}
          </Select>
          {data?.slice(0, 7).map((crypto: Crypto) => (
            <div
              key={crypto.id}
              className="flex justify-center gap-1 items-center w-[150px]  h-[35px] text-[12px] border border-gray-100 rounded-md p-1.5 cursor-pointer"
              onClick={() => fetchCandlestickData(crypto.id)}
            >
              <img src={crypto.image} alt={crypto.name} width={20} />
              <p>{crypto.name}</p>
            </div>
          ))}
        </div>

        <div className="w-[100%] lg:flex grid lg:justify-between justify-evenly gap-2">
          <div
            id="chart-container"
            className="border border-gray-100 rounded-md p-5 lg:w-4/5 h-full"
          >
            {isLoading || !data ? (
              <Spin tip="Loading ..." />
            ) : (
              <>
                {selectedCrypto ? (
                  <>
                    <div className="lg:flex grid justify-between items-center mb-4 border-b  ">
                      <p className="text-md font-bold mb-6 lg:text-[14px] text-[10px] flex gap-1">
                        <p className="text-orange-500">{selectedCrypto}</p>
                        Candlestick Chart
                      </p>

                      <TimeFarmChart />
                      <button onClick={toggleFullScreen}>
                        {isFullScreen ? <BiExitFullscreen /> : <BiFullscreen />}
                      </button>
                    </div>
                    {candlestickData.length > 0 ? (
                      <CandlestickChart
                        key="candlestick-chart"
                        data={candlestickData}
                      />
                    ) : (
                      <Spin />
                    )}
                  </>
                ) : (
                  <p>Select a cryptocurrency to see the chart.</p>
                )}
              </>
            )}
          </div>
          <div className="lg:w-1/4 w-screen  border border-gray-100 rounded-md ">
            <OrderBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCurrencies;
