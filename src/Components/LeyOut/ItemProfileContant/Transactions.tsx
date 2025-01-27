import { Typography } from "antd";
import { TransactionOutlined } from "@ant-design/icons";

const transactions = [
  { id: 1, name: "Receive", amount: 32, time: "11:31 AM" },
  { id: 2, name: "Transfer", amount: -30, time: "09:28 AM" },
  { id: 3, name: "Receive", amount: 43, time: "12:43 AM" },
  { id: 4, name: "Transfer", amount: -74, time: "08:01 AM" },
];

const { Text } = Typography;

const renderTransactions = () => (
  <>
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
          {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
        </Text>
        <Text type="secondary" className="text-sm">
          {transaction.time}
        </Text>
      </div>
    ))}
    <h1 className="text-blue-400 mt-5">See all</h1>
  </>
);
export default renderTransactions;
