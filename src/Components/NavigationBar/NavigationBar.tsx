import React, { useState } from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { TfiExchangeVertical } from "react-icons/tfi";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-md fixed bottom-0 w-full flex justify-around py-3 md:hidden z-10 border-t">
      <div
        className={`flex flex-col items-center ${
          activeTab === "Home" ? "text-orange-500" : "text-gray-600"
        }`}
        onClick={() => handleTabClick("Home")}
      >
        <BiHome className="text-xl" onClick={() => (document.location = "/")} />
        <span className="text-sm">Home</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "Search" ? "text-orange-500" : "text-gray-600"
        }`}
        onClick={() => handleTabClick("Search")}
      >
        <TfiExchangeVertical
          className="text-xl"
          onClick={() => (document.location = "/traderoom")}
        />
        <span className="text-sm">Exchange</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "Market" ? "text-orange-500" : "text-gray-600"
        }`}
        onClick={() => handleTabClick("Market")}
      >
        <div onClick={() => (document.location = "/market")}>
          <MdOutlineCurrencyBitcoin size={25} className="text-xl -mt-1" />
        </div>
        <span className="text-sm">Market</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "Profile" ? "text-orange-500" : "text-gray-600"
        }`}
        onClick={() => handleTabClick("Profile")}
      >
        <BiUser
          className="text-xl"
          onClick={() => (document.location = "/wallet")}
        />
        <span className="text-sm">Profile</span>
      </div>
    </div>
  );
};

export default NavigationBar;
