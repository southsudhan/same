import { useEffect, useState } from "react";
import { Layout, Menu, Switch } from "antd";
import { BiMenu } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineBarChart } from "react-icons/ai";
import { MdCampaign, MdShoppingCart } from "react-icons/md";
import { FiMessageSquare, FiHelpCircle } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "../Ui/BaseUi/Button/Button";

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

  return (
    <Layout style={{ minHeight: "100vh", background: "none" }}>
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
          <div
            style={{ padding: "16px", color: "#ffffff", fontWeight: "bold" }}
            className="bg-orange-500 text-white font-bold p-16"
          >
            Hi, Mohamad Amin Keimasi
          </div>
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
            <Menu.Item key="8">
              <span>Demo Mode</span>
              <Switch checked={demoMode} onChange={toggleDemoMode} />
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
    </Layout>
  );
};

export default SideBar;
