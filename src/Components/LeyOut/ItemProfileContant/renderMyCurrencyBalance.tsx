import React from "react";  
import { Table } from "antd";  

// Updated currency data with icons  
const currencyData = [  
  { currency: "Tether", balance: 1500.0, icon: "💵" }, // Added icon placeholders  
  { currency: "Bitcoin", balance: 0.12005, icon: "₿" },  
  { currency: "Solana", balance: 800.75, icon: "☀️" },  
  { currency: "Cardano", balance: 200000.0, icon: "⚡" },  
];  

// Currency columns with icons  
const columns = [  
  {  
    title: "Currency",  
    dataIndex: "currency",  
    key: "currency",  
    render: (text, record) => (  
      <span>  
        {record.icon} {text}  
      </span>  
    ),  
  },  
  {  
    title: "Balance",  
    dataIndex: "balance",  
    key: "balance",  
    render: (text) => text.toFixed(2), // Format balance to 2 decimal places  
  },  
];  

// Function to calculate total balance  
const calculateTotalBalance = (data) => {  
  return data.reduce((total, item) => total + item.balance, 0).toFixed(2);  
};  

const renderMyCurrencyBalance = () => {  
  const totalBalance = calculateTotalBalance(currencyData); // Calculate the total balance  

  return (  
    <div className="lg:flex grid w-full gap-2">  
      <Table  
        className="w-full"  
        dataSource={currencyData}  
        columns={columns}  
        rowKey={(record) => record.currency}  
        pagination={false} // Set to true if you want pagination  
      />  
      <div className="total-balance">  
        {/* <h2>Total Balance: ${totalBalance}</h2> Display Total Balance   */}
      </div>  
    </div>  
  );  
};  

export default renderMyCurrencyBalance;