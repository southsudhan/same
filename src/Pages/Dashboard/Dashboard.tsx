import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center gap-3">
        <SideBar/>
      </div>
    </>
  );
};

export default Dashboard;
