import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

const Wallet = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between w-full">
        <div className="w-[20%]">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Wallet;
