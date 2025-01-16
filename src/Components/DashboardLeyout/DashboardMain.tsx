import CercelChart from "./CercelChart/CercelChart";
import ChartOwner from "./ChartOwner/ChartOwner";
import UserWallet from "./UserWallet/UserWallet";

const DashboardMain = () => {
  return (
    <div className="lg:flex flex-col ">
      <UserWallet />
      <ChartOwner/>
      {/* <CercelChart/> */}
      <CercelChart/>
    </div>
  );
};

export default DashboardMain;
