import { useState } from "react";
import { Select, Card, Spin, Typography } from "antd";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";

export interface CurrenciesModel {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

const { Option } = Select;
const { Title, Text } = Typography;

const CompareCurrencies = () => {
  const { data, error, isLoading } = useCurrencies();
  const [coin1, setCoin1] = useState<CurrenciesModel | null>(null);
  const [coin2, setCoin2] = useState<CurrenciesModel | null>(null);

  const handleSelectCoin1 = (value: number) => {
    if (data) {
      setCoin1(data[value]);
    }
  };

  const handleSelectCoin2 = (value: number) => {
    if (data) {
      setCoin2(data[value]);
    }
  };

  if (isLoading) return <Spin size="large" />;
  if (error || !data) return <div>Error loading currencies</div>;

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Title level={5}>Cryptocurrency Comparison</Title>

      <div className="lg:flex grid lg:space-x-4 space-x-0 mb-4">
        <div className="flex flex-col w-[100%]">
          <Text strong>Select Coin 1:</Text>
          <Select
            onChange={handleSelectCoin1}
            className="w-[230px]"
            placeholder="Select a coin..."
            showSearch
          >
            {data.map((coin, index) => (
              <Option key={coin.id} value={index}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </Option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col">
          <Text strong>Select Coin 2:</Text>
          <Select
            onChange={handleSelectCoin2}
            className="w-[230px]"
            placeholder="Select a coin..."
            showSearch
          >
            {data.map((coin, index) => (
              <Option key={coin.id} value={index}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {coin1 && coin2 && (
        <div className="border-t mt-4 pt-4 ">
          <Title level={5}>Comparison:</Title>
          <div className="flex justify-between mb-2 gap-2 text-sm">
            <Card className="w-1/2">
              <img src={coin1.image} width={30} alt={coin1.name} />
              <Title level={5}>
                {coin1.name} ({coin1.symbol.toUpperCase()})
              </Title>
              <Text>Price: ${coin1.current_price}</Text>
              <Text>Market Cap: ${coin1.market_cap}</Text>
              <Text>24h Change: {coin1.price_change_percentage_24h}%</Text>
            </Card>
            <Card className="w-1/2">
              <img src={coin2.image} width={30} alt={coin2.name} />
              <Title level={5}>
                {coin2.name} ({coin2.symbol.toUpperCase()})
              </Title>
              <Text>Price: ${coin2.current_price}</Text>
              <Text>Market Cap: ${coin2.market_cap}</Text>
              <Text>24h Change: {coin2.price_change_percentage_24h}%</Text>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareCurrencies;
