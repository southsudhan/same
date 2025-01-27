import { Card, Tabs } from "antd";
import Button from "../../../../BasedComponents/BaseUi/Button/Button";
import { MdOutlineReport } from "react-icons/md";
import renderMyCurrencyBalance from "../../../ItemProfileContant/renderMyCurrencyBalance";
import renderInformation from "../../../ItemProfileContant/Information";
import renderTransactions from "../../../ItemProfileContant/Transactions";
import renderCardDetails from "../../../ItemProfileContant/CardDetails";

const { TabPane } = Tabs;

const ProfileContent = () => {
  return (
    <div className="p-3 space-y-6 w-[100%]">
      <div className="lg:flex grid items-center justify-between">
        <div className="lg:flex grid items-center justify-center gap-4">
          <img
            src="https://choosewichita.com/user/image/layouts/photo_inline_photo_3120.jpg?1598645919"
            alt=""
            width={200}
            className="rounded-full justify-center flex items-center"
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
      <div className="grid justify-center gap-2 lg:w-full w-[350px] ">
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
        <Card title="Trading Reports" className="flex  flex-col justify-around">
          <a href="https://example.com/report1" className="hover:underline">
            <div className="flex items-center gap-1">
              <MdOutlineReport />
              <h4 className="font-bold">January Trading Insights</h4>
            </div>

            <p className="text-sm text-gray-600">
              Analysis of stock performances this month.
            </p>
          </a>
        </Card>
        <Card title="Trading Reports" className="flex flex-col justify-between">
          <a href="https://example.com/report2" className="hover:underline">
            <div className="flex items-center gap-1">
              <MdOutlineReport />
              <h4 className="font-bold">Options Trading Strategy</h4>
            </div>
            <p className="text-sm text-gray-600">
              How to optimize options for maximum returns.
            </p>
          </a>
        </Card>
        <Card title="Trading Reports" className="flex flex-col justify-between">
          <a href="https://example.com/report3" className="hover:underline">
            <div className="flex items-center gap-1">
              <MdOutlineReport />
              <h4 className="font-bold">Stock Market Trends - Q1</h4>
            </div>
            {/* <BiRepost/> */}
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
