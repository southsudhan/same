import { useEffect, useState } from "react";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";
import CandlestickChart from "./CandlestickChart";
import { Card, List, Select, Spin } from "antd";

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

  // Fetch candlestick data when a cryptocurrency is selected
  const fetchCandlestickData = async (id: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=7`
    );
    const data = await response.json();

    // Format data for the chart
    const formattedData = data.map((item: any) => ({
      time: item[0] / 1000, // Convert milliseconds to seconds
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
    }));

    setCandlestickData(formattedData);
    setSelectedCrypto(id); // Set the selected cryptocurrency
  };

  useEffect(() => {
    // Fetch Bitcoin candlestick data by default
    fetchCandlestickData("bitcoin");
  }, []);

  const sortedData =
    data?.sort(
      (a: Crypto, b: Crypto) =>
        b.price_change_percentage_24h - a.price_change_percentage_24h
    ) || [];
  const topGainers = sortedData.slice(0, 5);
  const topLosers = sortedData.slice(-5);

  if (error && error instanceof Error) {
    return <p>خطا در دریافت داده‌ها: {error.message}</p>;
  }

  return (
    <div className="flex w-[100%] flex-col ">
      <div className="flex flex-col justify-center gap-4 w-[100%] mt-20 ">
        <div className="w-[100%] p-10 h-[130px] flex justify-center border border-gray-300 rounded-md  items-center ">
          <Select
            className="w-[300px]"
            placeholder="Select a cryptocurrency"
            onChange={fetchCandlestickData}
            allowClear
          >
            {data?.map((crypto: Crypto) => (
              <Select.Option key={crypto.id} value={crypto.id}>
                {crypto.name}
              </Select.Option>
            ))}
          </Select>
          <div className="flex justify-center gap-1">
            <List
              grid={{
                gutter: 20,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
                xxl: 6,
              }}
              dataSource={topGainers}
              renderItem={(item: Crypto) => (
                <List.Item>
                  <Card title={item.name} bordered={false}>
                    <p>
                      Change: {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </Card>
                </List.Item>
              )}
            />
            {/* <h2 className="text-lg font-bold emt-4 meb-4">Top Losers</h2> */}
            <List
              grid={{
                gutter: 20,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
                xxl: 6,
              }}
              dataSource={topLosers}
              renderItem={(item: Crypto) => (
                <List.Item>
                  <Card title={item.name} bordered={false} size="small">
                    <p>
                      Change: {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="w-[100%] flex gap-4 justify-between items-center">
          <div className="border border-gray-300 rounded-md p-5 h-[60vh] w-[80%] ">
            {isLoading || !data ? (
              <Spin tip="در حال بارگذاری..." />
            ) : (
              <>
                {selectedCrypto ? (
                  <>
                    <h1 className="text-md font-bold mb-6">
                      {selectedCrypto} Candlestick Chart
                    </h1>
                    {candlestickData.length > 0 ? (
                      <CandlestickChart
                        key="candlestick-chart"
                        data={candlestickData}
                      />
                    ) : (
                      <p>Loading chart...</p>
                    )}
                  </>
                ) : (
                  <p>Select a cryptocurrency to see the chart.</p>
                )}
              </>
            )}
          </div>
          <div className="w-[25%] border border-gray-300 rounded-md h-[60vh] ">
            <p>تغییرات</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCurrencies;
