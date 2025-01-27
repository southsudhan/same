import { Table } from "antd";

const currencyData = [  
    { currency: "USD", balance: 1500.0, symbol: "$", exchangeRate: 1.0 },  
    { currency: "EUR", balance: 1200.5, icon: null, symbol: "€", exchangeRate: 1.1 },  
    { currency: "GBP", balance: 800.75, icon: null, symbol: "£", exchangeRate: 1.3 },  
    { currency: "JPY", balance: 200000.0, icon: null, symbol: "¥", exchangeRate: 0.009 },  
    { currency: "CNY", balance: 3500.4, icon: null, symbol: "¥", exchangeRate: 0.15 },  
  ];

  const columns = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (text: any) => text.toFixed(2), // Format balance to 2 decimal places
    },
  ];
  

const renderMyCurrencyBalance = () => (
  <div className="lg:flex grid w-full gap-2">
    <Table
      className="w-full"
      dataSource={currencyData}
      columns={columns}
      rowKey={(record) => record.currency}
      pagination={false} // Set to true if you want pagination
    />
  </div>
);

export default renderMyCurrencyBalance;
