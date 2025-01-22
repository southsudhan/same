import CercelChart from "./CercelChart/CercelChart";
import ChartOwner from "./ChartOwner/ChartOwner";
import UserWallet from "./UserWallet/UserWallet";

const DashboardMain = () => {
  return (
    <div className="lg:flex flex-col -mt-10 lg:w-[1500px] w-screen">
      <UserWallet />
      <ChartOwner />
      <CercelChart />
    </div>
  );
};

export default DashboardMain;
