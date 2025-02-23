import { Card } from "antd";

const UserWallet = () => {
  return (
    <div className="rounded-lg py-2 w-full text-black lg:flex flex-grow   justify-center gap-3  ">
      <Card title="Total Income" bordered className="lg:w-1/4 w-[380px]">
        <p className="lg:text-2xl text-sm">$32,499.93</p>
        <p className="text-green-600">+ 12.95% Compared to last month</p>
      </Card>

      <Card title="Profit" bordered className="lg:w-1/4 w-[380px]">
        <p className="text-2xl">$10,499.93</p>
        <p className="text-red-600">- 0.33% Compared to last month</p>
      </Card>
      <Card title="Conversion Rate" bordered className="lg:w-1/4 w-[380px]">
        <p className="text-2xl">4.83%</p>
        <p className="text-green-600">+ 8.05% Compared to last month</p>
      </Card>
      <Card title="Total Views" bordered className="lg:w-1/4 w-[380px]">
        <p className="text-2xl">5,211,832</p>
        <p className="text-red-600">+ 5.21% Compared to last month</p>
      </Card>
    </div>
  );
};

export default UserWallet;
