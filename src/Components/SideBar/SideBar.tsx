import { useState } from "react";
import { Menu, Drawer } from "antd";
import {
  BiSolidDashboard,
  BiSolidUserAccount,
  BiTransferAlt,
  BiMenu,
} from "react-icons/bi";
import { BsFillDatabaseFill } from "react-icons/bs";
import DashboardMain from "../LeyOut/WalletLeyout/DashboardLeyout/DashboardMain";
import Header from "../Header/Header";
import { MdAddCircleOutline, MdOutlineInbox, MdSettings } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { IoIosRepeat } from "react-icons/io";
import ProfileContent from "../LeyOut/WalletLeyout/DashboardLeyout/ProfileContant/ProfileContant";
import Button from "../BasedComponents/BaseUi/Button/Button";

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: <BiSolidDashboard /> },
  { key: "profile", label: "Profile", icon: <BiSolidUserAccount /> },
  { key: "cards", label: "Cards", icon: <BsFillDatabaseFill /> },
  { key: "transactions", label: "Transactions", icon: <BiTransferAlt /> },
  { key: "insights", label: "Insights", icon: <MdAddCircleOutline /> },
  { key: "inbox", label: "Inbox", icon: <MdOutlineInbox /> },
  { key: "fouram", label: "Fouram", icon: <FaRegChartBar /> },
  { key: "reports", label: "Reports", icon: <IoIosRepeat /> },
  { key: "settings", label: "Settings", icon: <MdSettings /> },
];

const Playground = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    setSelectedItem(e.key);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "dashboard":
        return (
          <div>
            <DashboardMain />
          </div>
        );
      case "profile":
        return (
          <div>
            <ProfileContent />
          </div>
        );
      case "cards":
        return <div>Cards Content</div>;
      case "transactions":
        return <div>Transactions Content</div>;
      case "insights":
        return <div>Insights Content</div>;
      case "settings":
        return <div>Settings Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <>
      <Header />
      <div className="flex fixed mt-20 ">
        <div className="lg:block hidden  ">
          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            className="w-72 border h-screen"
            onClick={handleMenuClick}
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
            <Button className="absolute bottom-24 left-2" width={270}>
              Upgrade to Pro
            </Button>
          </Menu>
        </div>
        <div className="lg:hidden block">
          <Button
            className="absolute  justify-center flex items-center gap-2 left-1 z-40 "
            width={130}
            height={40}
            onClick={() => setVisible(true)}
          >
            <BiMenu size={24} />
            <h3>Dashboard</h3>
          </Button>
          <Drawer
            title="Hi, Mohamad Amin "
            placement="left"
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["dashboard"]}
              className="w-full border h-[400px] border-none"
              onClick={(e) => {
                handleMenuClick(e);
                setVisible(false);
              }}
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
              <Button className="absolute bottom-24 left-2" width={170}>
                Upgrade to Pro
              </Button>
            </Menu>
          </Drawer>
        </div>
      </div>
      <div className="lg:p-10 p-0 lg:mt-20 mt-48 relative lg:left-72 left-0">
        {renderContent()}
      </div>
    </>
  );
};

export default Playground;
