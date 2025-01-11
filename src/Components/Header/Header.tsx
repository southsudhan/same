import { Alert, Badge, Card, Modal } from "antd";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import ReusablePopover from "../ReusablePopover/ReusablePopover";
import SearchBar from "../SearchBar/SearchBar";
import MenuItem from "../MenuItem/MenuItem";
import CompareCurrencies from "../TradeLeyout/CompareCurrencies/CompareCurrencies";
import { CgOptions } from "react-icons/cg";
import BuySellCurrencies from "../TradeLeyout/BuySellCurrencies/BuySellCurrencies";
import SwapCurrencies from "../TradeLeyout/SwapCurrencies/SwapCurrencies";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSell, setisModalSell] = useState(false);
  const [isSwap, setisSwap] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* sell */

  const showModalSell = () => {
    setIsModalOpen(true);
  };

  const handleOkSell = () => {
    setIsModalOpen(false);
  };

  const handleCancelSell = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white z-50 border-b cursor-pointer fixed w-full top-0">
      <div className="flex items-center">
        <span className="text-black font-bold text-lg ml-1">Crypto</span>
        <span className="text-orange-500 font-bold text-lg">Hub</span>
      </div>
      <MenuItem />

      <div className="flex items-center space-x-4">
        <SearchBar />

        <div className="flex items-center gap-2">
          <MdCompare size={25} onClick={showModal} />
          <ReusablePopover
            title={
              <Card className="lg:hidden block">
                <span className="font-bold" onClick={showModalSell}>
                  Buy Currencies |{" "}
                </span>
                <span className="font-bold" onClick={undefined}>
                  Swap Currencies
                </span>
              </Card>
            }
          >
            {/* <MdOutlinePrivacyTi p size={25} /> */}
            <CgOptions size={25} />
          </ReusablePopover>

          <ReusablePopover
            title={
              <div className="font-bold">
                Notifications
                <Alert message="Success Text" type="warning" closable />
              </div>
            }
          >
            <Badge dot>
              <IoMdNotificationsOutline size={25} />
            </Badge>
          </ReusablePopover>
        </div>
        <div className="flex items-center border border-orange-500 rounded-full shadow-xl">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <button className=" lg:h-[40px] h-[35px]   lg:text-sm text-sm lg:px-8 px-2  ">
          My Wallet
        </button>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <CompareCurrencies />
      </Modal>
      <Modal open={isModalSell} onOk={showModalSell} onCancel={handleCancelSell}>
        <BuySellCurrencies />
      </Modal>
      <Modal>
        <SwapCurrencies />
      </Modal>
    </header>
  );
};

export default Header;
