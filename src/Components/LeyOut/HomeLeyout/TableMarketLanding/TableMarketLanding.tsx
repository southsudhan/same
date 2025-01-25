import React from "react";  
import { Table } from "antd";  
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";  
import Button from "../../../BasedComponents/BaseUi/Button/Button";

const TableMarketLanding = () => {  
  const { data, error, isLoading } = useCurrencies();  

  // Ensure we only display top 5 currencies based on market performance  
  const topCurrencies = data ? data.slice(0, 5) : [];  

  if (isLoading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error.message}</div>;  

  const columns = [  
    {  
      title: 'Trading Pair',  
      dataIndex: 'symbol',  
      render: (text:any, record:any) => (  
        <div className="flex items-center">  
          <img src={record.image} width={20} alt={text} className="mr-2" />  
          {text}/USDT PERP  
        </div>  
      ),  
    },  
    {  
      title: 'Price',  
      dataIndex: 'current_price',  
      render: (text:any) => `$${text}`,  
    },  
    {  
      title: 'Change (24h)',  
      dataIndex: 'high_24h',  
      render: (text:any, record:any) => (  
        <span className={`font-semibold ${record.low_24h > 0 ? "text-green-500" : "text-red-500"}`}>  
          {record.high_24h > 0 ? "▲" : "▼"} {record.high_24h}%  
        </span>  
      ),  
    },  
    {  
      title: 'Volume',  
      dataIndex: 'volume',  
      render: () => '21,252.000m', // Placeholder for volume  
    },  
    {  
      title: 'Actions',  
      render: () => (  
        <Button height={40}>  
          Trade  
        </Button>  
      ),  
    },  
  ];  

  return (  
    <div className="bg-gradient-to-r  justify-around rounded-lg p-4 lg:w-2/3 w-full lg:ml-80 ml-0 mt-10">  
      <h2 className="text-2xl font-semibold  mt-10  text-center mb-10">  
        Popular Cryptocurrencies  
      </h2>  
      <Table  
        dataSource={topCurrencies}  
        columns={columns}  
        rowKey="symbol"  
        pagination={false}  
        className="text-center"  
        bordered  
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}  
      />  
    </div>  
  );  
};  

export default TableMarketLanding;