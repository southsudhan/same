import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { Card, Row, Col, Typography, Tabs, Table } from "antd";
import Button from "../../../../BasedComponents/BaseUi/Button/Button";
import { DollarOutlined, TransactionOutlined } from "@ant-design/icons";
import { BiPhone, BiRename, BiRepost, BiSolidRename } from "react-icons/bi";

const { Text } = Typography;
const { TabPane } = Tabs;
const transactions = [
  { id: 1, name: "Receive", amount: 32, time: "11:31 AM" },
  { id: 2, name: "Transfer", amount: -30, time: "09:28 AM" },
  { id: 3, name: "Receive", amount: 43, time: "12:43 AM" },
  { id: 4, name: "Transfer", amount: -74, time: "08:01 AM" },
];

const currencyData = [
  { currency: "USD", balance: 1500.0, icon: <DollarOutlined /> },
  { currency: "EUR", balance: 1200.5 },
  { currency: "GBP", balance: 800.75 },
  { currency: "JPY", balance: 200000.0 },
  { currency: "CNY", balance: 3500.4 },
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

const cardDetails = {
  cardName: "Andri Juliansyah",
  cardNumber: "**** **** **** 9097",
  expDate: "09/24",
  cvv: "249",
  balance: "$32,197.00",
};

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
    <Button width={150}> + Add Card</Button>
  </div>
);

const renderInformation = () => (
  <div className="lg:flex grid w-full gap-2">
    <Card className="mt-4 lg:w-1/2 w-full " title="Information">
      <h3 className="flex items-center gap-2">
        <BiSolidRename /> Name: Mohamad Amin keimasi
      </h3>
      <b />
      <h3 className="flex items-center gap-2">
        <BiPhone /> Number Phone: +989134278124{" "}
      </h3>
      <p className="flex items-center">
        <AiOutlineMail className="mr-2" /> <span>moakeimasi@email.com</span>
      </p>
    </Card>
    <Card className="mt-4 lg:w-1/2 w-full" title="Location">
      <p className="flex items-center">
        <span className="mr-2">🌍</span> New York, USA
      </p>

      <a href="https://alextrader.com" className="text-blue-600 underline">
        alextrader.com
      </a>
    </Card>
  </div>
);

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

const ProfileContent = () => {
  return (
    <div className="p-3 space-y-6 ">
      <div className="lg:flex grid items-center justify-between">
        <div className="lg:flex grid items-center justify-center gap-4">
          <img
            src="https://choosewichita.com/user/image/layouts/photo_inline_photo_3120.jpg?1598645919"
            alt=""
            width={200}
            className="rounded-full"
          />
          <div className="grid justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold ">Mohamad Amin keimasi</h2>
              <p className="text-gray-500 text-sm">
                this is my profile page about my trade, transfers, buy or sell
              </p>
            </div>
            <p className="text-orange-500 text-sm">see more about me</p>
          </div>
        </div>
        <div className="grid gap-4">
          <h1 className="text-2xl flex gap-2 items-center font-semibold">
            <p className="text-xl text-gray-500">My total wallet:</p>$32/000.00
          </h1>
          <div className="flex">
            <Button
              className="mr-2"
              border="solid 1px orange"
              bgColor="#FFFFFF"
              color="orange"
            >
              Edit Profile
            </Button>
            <Button>Logout</Button>
          </div>
        </div>
      </div>
      <div className="grid justify-center gap-2 w-screen">
        <h3 className="text-md font-semibold mt-4 ">About me</h3>
        <p>
          I'm a trader based in New York, USA. I specialize in stock and options
          trading, combining analytics and intuition to maximize profits. I
          enjoy sharing insights and reports to help others succeed in their
          trading journey.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg mb-2">Skills</h3>
        <div className="flex flex-wrap">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
            Technical Analysis
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
            Day Trading
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
            Risk Management
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
            Market Research
          </span>
        </div>
      </div>

      <Tabs defaultActiveKey="1" className="w-full">
        <TabPane tab="My currency balance" key="mycurrencybalance">
          <Card title="Card Details" bordered={true} className="mt-4 w-full">
            {renderMyCurrencyBalance()}
          </Card>
        </TabPane>
        <TabPane tab="Information" key="information">
          <Card title="Information" bordered={true} style={{ width: "100%" }}>
            {renderInformation()}
          </Card>
        </TabPane>
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

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card title="Trading Reports" className="flex flex-col justify-between">
          <a href="https://example.com/report1" className="hover:underline">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Trading Report 1"
              className="mb-2 rounded"
            />
            <h4 className="font-bold">January Trading Insights</h4>
            <p className="text-sm text-gray-600">
              Analysis of stock performances this month.
            </p>
          </a>
        </Card>
        <Card title="Trading Reports" className="flex flex-col justify-between">
          <a href="https://example.com/report2" className="hover:underline">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Trading Report 2"
              className="mb-2 rounded"
            />
            <h4 className="font-bold">Options Trading Strategy</h4>
            <p className="text-sm text-gray-600">
              How to optimize options for maximum returns.
            </p>
          </a>
        </Card>
        <Card title="Trading Reports" className="flex flex-col justify-between">
          <a href="https://example.com/report3" className="hover:underline">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Trading Report 3"
              className="mb-2 rounded"
            />
            {/* <BiRepost/> */}
            <h4 className="font-bold">Stock Market Trends - Q1</h4>
            <p className="text-sm text-gray-600">
              Insights on trends to watch in the first quarter.
            </p>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default ProfileContent;
