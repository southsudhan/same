import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import {
  BiSolidChevronsRight,
  BiSolidDashboard,
  BiSolidEvStation,
  BiSolidUserAccount,
  BiTransferAlt,
  BiMenu,
} from "react-icons/bi";
import { BsFillDatabaseFill } from "react-icons/bs";
import DashboardMain from "../Components/DashboardLeyout/DashboardMain";
import Market from "../Pages/Market/Market";
import Header from "../Components/Header/Header";
import Button from "../Components/Ui/BaseUi/Button/Button";

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: <BiSolidDashboard /> },
  { key: "market", label: "Market", icon: <BiSolidUserAccount /> },
  { key: "cards", label: "Cards", icon: <BsFillDatabaseFill /> },
  { key: "transactions", label: "Transactions", icon: <BiTransferAlt /> },
  { key: "insights", label: "Insights", icon: <BiSolidChevronsRight /> },
  { key: "settings", label: "Settings", icon: <BiSolidEvStation /> },
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
      case "market":
        return (
          <div>
            <Market />
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
        <div className="lg:block hidden bg-red-300  ">
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
            className="absolute top-8 left-2 z-40"
            width={40}
            onClick={() => setVisible(true)}
          >
            <BiMenu size={24} />
          </Button>
          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["dashboard"]}
              className="w-full border h-screen"
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

        <div className="p-10 w-[190%] ">{renderContent()}</div>
      </div>
    </>
  );
};

export default Playground;
