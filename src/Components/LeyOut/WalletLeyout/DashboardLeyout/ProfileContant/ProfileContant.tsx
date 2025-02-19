import { Card, Tabs } from "antd";
import renderMyCurrencyBalance from "../../../ItemProfileContant/renderMyCurrencyBalance";
import renderInformation from "../../../ItemProfileContant/Information";
import renderTransactions from "../../../ItemProfileContant/Transactions";
import renderCardDetails from "../../../ItemProfileContant/CardDetails";
import ProfileUser from "../../../ItemProfileContant/ProfileUser";
import ProfileReport from "../../../ItemProfileContant/ProfileReport";

const { TabPane } = Tabs;

const ProfileContent = () => {
  return (
    <div className="p-3 space-y-6 lg:mb-0 mb-16 lg:w-[120%]">
      <ProfileUser />
      <Tabs defaultActiveKey="1" className="lg:w-[100%] w-[70%]">
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

      <ProfileReport />
    </div>
  );
};

export default ProfileContent;
