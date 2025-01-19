import { useEffect, useState } from "react";
import { Layout, Menu, Switch } from "antd";
import { BiMenu, BiSolidContact, BiSupport } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineBarChart } from "react-icons/ai";
import { MdCampaign, MdShoppingCart } from "react-icons/md";
import { FiMessageSquare, FiHelpCircle } from "react-icons/fi";
import { BsFillDatabaseFill, BsFillPersonFill } from "react-icons/bs";
import Button from "../Ui/BaseUi/Button/Button";
import {
  BiSolidChevronsRight,
  BiSolidDashboard,
  BiSolidEvStation,
  BiSolidUserAccount,
  BiTransferAlt,
} from "react-icons/bi";
import DashboardMain from "../DashboardLeyout/DashboardMain";
import Market from "../../Pages/Market/Market";

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: <BiSolidDashboard /> },
  { key: "market", label: "Market", icon: <BiSolidUserAccount /> },
  { key: "cards", label: "Cards", icon: <BsFillDatabaseFill /> },
  { key: "transactions", label: "Transactions", icon: <BiTransferAlt /> },
  { key: "insights", label: "Insights", icon: <BiSolidChevronsRight /> },
  { key: "settings", label: "Settings", icon: <BiSolidEvStation /> },
];

const { Sider } = Layout;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [demoMode, setDemoMode] = useState(false);

  const isMobile = window.innerWidth < 900;

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDemoMode = (checked: any) => {
    setDemoMode(checked);
  };
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
            <p>Ohter </p>
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
    <div style={{ minHeight: "100vh", background: "none" }}>
      <div
        onClick={toggleSidebar}
        className={`${
          isMobile ? "left-[320px]" : ""
        } fixed top-[110px]  items-center gap-2 z-[1000] lg:hidden flex`}
      >
        <BiMenu size={30} />
      </div>

      {isOpen && (
        <Sider
          width={300}
          style={{
            position: "fixed",
            left: 0,
            zIndex: 10,
          }}
          className="lg:h-[86%] h-[75%] lg:top-[80px] top-[110px]"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1" icon={<AiOutlineDashboard />}>
              Overview
            </Menu.Item>
            <Menu.Item key="2" icon={<AiOutlineBarChart />}>
              Performance
            </Menu.Item>
            <Menu.Item key="3" icon={<MdCampaign />}>
              Campaigns
            </Menu.Item>
            <Menu.Item key="4" icon={<MdShoppingCart />}>
              Orders
            </Menu.Item>
            <Menu.Item key="5" icon={<BsFillPersonFill />}>
              Products
            </Menu.Item>
            <Menu.Item key="6" icon={<FiMessageSquare />}>
              Message
            </Menu.Item>
            <Menu.Item key="7" icon={<AiOutlineBarChart />}>
              Sales Platform
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="8" icon={<BiSupport />}>
              Contact Us
            </Menu.Item>
            <Menu.Item key="9" icon={<FiHelpCircle />}>
              Feedback
            </Menu.Item>
            <Menu.Item key="10" icon={<FiHelpCircle />}>
              Help and docs
            </Menu.Item>
          </Menu>
          <div className="absolute w-full -bottom-10 left-2 flex flex-col gap-2">
            <Button width={280}>Upgrade Now</Button>
          </div>
        </Sider>
      )}

      {/* {isOpen && (
        <div
          className="fixed inset-0 z-20 cursor-pointer"
          onClick={toggleSidebar}
        ></div>
      )} */}
    </div>
  );
};

export default SideBar;
