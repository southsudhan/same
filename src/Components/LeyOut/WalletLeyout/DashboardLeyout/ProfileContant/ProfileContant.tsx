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
    <div className="p-3 space-y-6 lg:mb-0 mb-16 2xl:w-[124%] w-full">
      <Card className="grid items-center  justify-between  lg:w-full w-[70%] ">
        <div className="lg:flex  lg:w-[100vh] w-[100%] items-center justify-between  gap-4  ">
          <div className="lg:flex grid items-center gap-2">
            <img
              src="https://choosewichita.com/user/image/layouts/photo_inline_photo_3120.jpg?1598645919"
              alt=""
              width={100}
              height={100}
              className="rounded-full relative lg:left-0 left-1/3 lg:top-0 -top-20"
            />
            <div className="lg:flex grid justify-between gap-4 lg:mt-0 -mt-20 ">
              <div >
                <h2 className="text-lg font-semibold text-center ">
                  Mohamad Amin keimasi
                </h2>
                <p className="text-gray-500 text-sm text-center">
                  this is my profile page about my trade, transfers, buy or sell
                </p>
              </div>
            </div>
          </div>
          <h1 className="font-semibold text-center text-xl gap-1 flex justify-center items-center">
            <p className="text-gray-600 text-[15px]">My total wallet:</p>
            <p className="text-lg">$32/000.00</p>
          </h1>
        </div>
        <div className="flex mt-5 justify-end w-full  ">
          <Button
            className="mr-2"
            border="solid 1px orange"
            bgColor="#FFFFFF"
            color="orange"
            width={150}
          >
            Edit Profile
          </Button>
          <Button width={150}>Logout</Button>
        </div>
        <div className="grid gap-4"></div>
      </Card>

      <Tabs defaultActiveKey="1" className="lg:w-full w-[70%]">
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

      <div className="grid md:grid-cols-3 gap-4 mt-6 lg:w-full w-[70%]">
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
