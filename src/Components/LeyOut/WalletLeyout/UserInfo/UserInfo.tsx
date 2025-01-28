import { Card, Tabs, Typography, Popconfirm } from "antd";
import { DollarOutlined, TransactionOutlined } from "@ant-design/icons";
import Button from "../../../BasedComponents/BaseUi/Button/Button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const { Text } = Typography;
const { TabPane } = Tabs;

const UserInfo = () => {
  const transactions = [
    { id: 1, name: "Receive", amount: 32, time: "11:31 AM" },
    { id: 2, name: "Transfer", amount: -30, time: "09:28 AM" },
    { id: 3, name: "Receive", amount: 43, time: "12:43 AM" },
    { id: 4, name: "Transfer", amount: -74, time: "08:01 AM" },
  ];

  const cardDetails = {
    cardName: "Andri Juliansyah",
    cardNumber: "**** **** **** 9097",
    expDate: "09/24",
    cvv: "249",
    balance: "$32,197.00",
  };

  const handleSignOut = () => {
    console.log("User signed out");
  };

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

  const renderCardDetails = () => (
    <div className="flex flex-col">
      <Text>Card Name: {cardDetails.cardName}</Text>
      <Text>Card Number: {cardDetails.cardNumber}</Text>
      <Text>Exp Date: {cardDetails.expDate}</Text>
      <Text>CVV: {cardDetails.cvv}</Text>
      <Text type="secondary" className="mt-2">
        Balance: {cardDetails.balance}
      </Text>
      <Button className="mt-2" width={30} bgColor="#FFFFFF" color="orange">
        Copy
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full p-5 h-full rounded-lg ">
      <div className="mb-3 text-center grid w-full gap-5">
        <div className="flex justify-start gap-2 items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            className="rounded-full"
            width={35}
          />
          <h1>Welcome back, Amin keimasi!</h1>
          <Popconfirm
            title="Are you sure you want to sign out?"
            onConfirm={handleSignOut}
            okText="Yes"
            cancelText="No"
            popupVisible
          ></Popconfirm>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-left text-gray-400">Total Balance:</h3>
          <h1 className="text-black text-[20px]">
            $32,197.00 <DollarOutlined />
          </h1>
        </div>
      </div>
      <div className="flex space-x-2 mb-4 w-full mt-5 ">
        <Button className="gap-2">
          <FaArrowUp /> Send
        </Button>
        <Button className="gap-2">
          <FaArrowDown /> Receive
        </Button>
      </div>

      <Tabs defaultActiveKey="1" className="w-full">
        <TabPane tab="Transactions" key="transactions">
          <Card title="Transactions" bordered={true} style={{ width: "100%" }}>
            {renderTransactions()}
          </Card>
        </TabPane>
        <TabPane tab="Card Details" key="cardDetails">
          <Card title="Card Details" bordered={true} className="mt-4 w-full">
            {renderCardDetails()}
          </Card>
        </TabPane>
        <TabPane tab="History" key="history" disabled></TabPane>
      </Tabs>
      <div className="flex gap-2 mt-4 w-full">
        <Button>Logout</Button>
        <Button bgColor="#FFFFFF" color="orange" border="solid 1px">
          Request Again
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
