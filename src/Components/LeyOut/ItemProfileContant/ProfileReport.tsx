import { Card } from "antd";
import { MdOutlineReport } from "react-icons/md";

const ProfileReport = () => {
  return (
    <div className="grid md:grid-cols-3 md:gap-16 gap-2 mt-6 w-full ">
      <Card title="Trading Reports" className="flex  flex-col justify-around w-[350px]">
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
      <Card title="Trading Reports" className="flex flex-col justify-between w-[350px]">
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
      <Card title="Trading Reports" className="flex flex-col justify-between w-[350px]">
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
  );
};

export default ProfileReport;
