import { useEffect, useState } from 'react';
import { Card, Table, Typography } from 'antd';
import { useCurrencies } from '../../Hooks/Currencies/useCurrencies';

const { Title } = Typography;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

const LiveCryptoPrice = () => {
  const { data, error, isLoading } = useCurrencies();
  const [prices, setPrices] = useState<PriceData[]>([]);

  useEffect(() => {
    if (data) {
      setPrices(data);
    }

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false`);
        const newData = await response.json();
        setPrices(newData);
      } catch (error) {
        console.error('Error fetching live prices:', error);
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [data]);

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: PriceData) => (
        <div className="flex items-center gap-2">
          <img 
            src={`https://assets.coingecko.com/coins/images/1/small/${record.id}.png`}
            alt={text}
            className="w-6 h-6"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Price (USD)',
      dataIndex: 'current_price',
      key: 'current_price',
      render: (price: number) => `$${price.toLocaleString()}`,
    },
    {
      title: '24h Change',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      render: (change: number) => (
        <span className={change >= 0 ? 'text-green-500' : 'text-red-500'}>
          {change.toFixed(2)}%
        </span>
      ),
    },
    {
      title: 'Last Updated',
      dataIndex: 'last_updated',
      key: 'last_updated',
      render: (time: string) => new Date(time).toLocaleTimeString(),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card className="shadow-lg">
      <Title level={4}>Live Crypto Prices</Title>
      <Table
        dataSource={prices}
        columns={columns}
        rowKey="id"
        pagination={false}
        className="overflow-x-auto"
      />
    </Card>
  );
};

export default LiveCryptoPrice;