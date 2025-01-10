import React, { useState } from "react";
import { message, Table, Spin, Input } from "antd";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const { Search } = Input;

const Currencies = () => {
  const { data, error, isLoading } = useCurrencies();
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <Spin size="large" />;
  }
  if (error) {
    message.error("An error occurred while fetching data.");
    return null; // Optionally return null or a fallback UI
  }

  // Filter data based on search query
  const filteredData = data?.filter((currency) =>
    currency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      title: "Markets",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <div className="flex items-center justify-start gap-2">
          <img
            src={record.image}
            width={20}
            alt={text}
            style={{ marginRight: 8 }}
          />
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol: any, record: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>{symbol}</p>
        </div>
      ),
    },
    {
      title: "Current Price (USD)",
      dataIndex: "current_price",
      key: "current_price",
      render: (price: any) => <p>${price.toFixed(2)}</p>, // Format price to two decimal places
    },
    {
      title: "24h Price Change",
      dataIndex: "price_change_percentage_24h",
      key: "price_change_percentage_24h",
      render: (change: any) => (
        <p className={change > 0 ? "text-green-500" : "text-red-500"}>
          {change.toFixed(2)}%
        </p>
      ),
    },
    {
      title: "Total Volume",
      dataIndex: "total_volume",
      key: "total_volume",
      render: (volume: any) => <p>{volume}</p>,
    },
  ];

  return (
    <div>
      <div className="w-1/2 justify-center items-center flex relative left-1/4">
        <Search
          placeholder="Search currencies"
          onSearch={(value) => setSearchQuery(value)}
          style={{ marginBottom: 16 }}
        />
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        size="small"
        pagination={false}
        className="h-[100%] p-5"
        scroll={{ y: 400 }} // Set vertical scroll
        rowKey="symbol" // Unique key for each row
      />
    </div>
  );
};

export default Currencies;
