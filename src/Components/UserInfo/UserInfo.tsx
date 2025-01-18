import React from "react";
import { Button, Card, Typography } from "antd";
import { DollarOutlined, TransactionOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const UserInfo = () => {
  const transactions = [
    { id: 1, name: "Youtube", amount: -15, time: "11:31 AM" },
    { id: 2, name: "Transfer", amount: 30, time: "09:28 AM" },
  ];

  return (
    <div className="flex flex-col items-center lg:w-[500px] w-[330px] h-full p-5 bg-white rounded-lg">
      <div className="mb-4">
        <Title level={4}>Welcome back, Amin keimasi!</Title>
        <h3  className="text-center text-gray-400 m-5">Total Balance</h3>
        <Title level={3} className="text-purple-600 text-center">
          $32,197.00 <DollarOutlined />
        </Title>
      </div>
      <div className="flex space-x-2 mb-4">
        <Button type="primary" size="large">
          + Add
        </Button>
        <Button type="default" size="large">
          Send
        </Button>
      </div>
      <Card title="Transactions" bordered={true} style={{ width: "100%" }}>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center py-2"
          >
            <Text className="flex items-center">
              <TransactionOutlined
                className={`mr-2 ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              />
              {transaction.name}
            </Text>
            <Text
              className={`font-semibold ${
                transaction.amount < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </Text>
            <Text type="secondary" className="text-sm">
              {transaction.time}
            </Text>
          </div>
        ))}
        <Button type="link" className="text-purple-600">
          See all
        </Button>
      </Card>

      <Card title="Card Details" bordered={true} className="mt-4 w-full">
        <div className="flex justify-between mb-2">
          <Text type="secondary">Main Card</Text>
          <Text type="secondary">$32,197.00</Text>
        </div>
        <div className="flex flex-col">
          <Text>Card Name: Andri Juliansyah</Text>
          <Text>Card Number: **** **** **** 9097</Text>
          <Text>Exp Date: 09/24</Text>
          <Text>CVV: 249</Text>
        </div>
        <Button type="link" className="mt-2">
          Copy
        </Button>
      </Card>
    </div>
  );
};

export default UserInfo;
