import DashboardMain from "../../Components/DashboardLeyout/DashboardMain";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

const Wallet = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between  w-full">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="lg:w-[80%] w-full mr-5 mt-20">
            {/* <div className="flex justify-between items-center text-black mt-24 border-b border-gray-200 pb-3">
                <p>Overview</p>
                <Button width={200} className="bg-transparent">Custimez Widget</Button>
            </div> */}
          <DashboardMain />
        </div>
      </div>
    </>
  );
};

export default Wallet;
