import { Alert, Badge, Card, Drawer, Modal } from "antd";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import ReusablePopover from "../ReusablePopover/ReusablePopover";
import SearchBar from "../SearchBar/SearchBar";
import MenuItem from "../MenuItem/MenuItem";
import { CgOptions } from "react-icons/cg";
import Button from "../BasedComponents/BaseUi/Button/Button";
import UserInfo from "../LeyOut/WalletLeyout/UserInfo/UserInfo";
import CompareCurrencies from "../LeyOut/TradeLeyout/CompareCurrencies/CompareCurrencies";
import BuySellCurrencies from "../LeyOut/TradeLeyout/BuySellCurrencies/BuySellCurrencies";
import SwapCurrencies from "../LeyOut/TradeLeyout/SwapCurrencies/SwapCurrencies";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSell, setisModalSell] = useState(false);
  const [isSwap, setisSwap] = useState(false);

  /* compare */
  const [avatar, setAvatar] = useState(false);

  const showDrawerAvatar = () => {
    setAvatar(true);
  };

  const onCloseAvatar = () => {
    setAvatar(false);
  };

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
    setisModalSell(true);
  };

  const handleCancelSell = () => {
    setisModalSell(false);
  };

  /* swap */

  const showModalSwap = () => {
    setisSwap(true);
  };

  const handleCancelSwap = () => {
    setisSwap(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white z-50 border-b cursor-pointer fixed w-full top-0">
      <div
        className="flex items-center"
        onClick={() => (document.location = "/")}
      >
        <span className="text-black font-bold text-lg ml-1">Crypto</span>
        <span className="text-orange-500 font-bold text-lg">Hub</span>
      </div>
      <MenuItem />

      <div className="flex items-center space-x-4">
        <SearchBar />

        <div className="flex items-center gap-2">
          <MdCompare
            size={50}
            className="lg:w-[60px] w-[40px]"
            onClick={showModal}
          />
          <ReusablePopover
            className="lg:hidden block"
            title={
              <div className="lg:hidden grid w-full gap-2">
                <Button onClick={showModalSell}>Buy Currencies</Button>
                <Button onClick={showModalSwap}>Swap Currencies</Button>
                <Button onClick={()=>document.location = "/market"}>Market</Button>
              </div>
            }
          >
            {/* <MdOutlinePrivacyTip size={25} /> */}
            <CgOptions size={45} />
          </ReusablePopover>

          <ReusablePopover
            title={
              <div className="font-bold gap-2 flex-col flex">
                Notifications
                <Alert
                  message="Your order has been placed successfully"
                  type="success"
                  closable
                  showIcon
                  className="lg:w-[400px] w-[300px]"
                />
                <Alert
                  message="Insufficient funds for transaction"
                  type="warning"
                  closable
                  showIcon
                  className="lg:w-[400px] w-[300px]"
                />
                <Alert
                  message="Unable to process your order"
                  type="error"
                  closable
                  showIcon
                  className="lg:w-[400px] w-[300px]"
                />
                <Alert
                  message="Your account balance has been updated"
                  type="info"
                  closable
                  showIcon
                  className="lg:w-[400px] w-[300px]"
                />
              </div>
            }
          >
            <Badge dot>
              <IoMdNotificationsOutline size={25} />
            </Badge>
          </ReusablePopover>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            className="rounded-full"
            width={35}
            onClick={showDrawerAvatar}
          />
        </div>

        <Button
          className=" lg:h-[40px] h-[3px]  lg:w-[150px] w-[53px] lg:text-sm text-[10px] lg:px-8 px-2  "
          onClick={() => (document.location = "/wallet")}
        >
          My Wallet
        </Button>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <CompareCurrencies />
      </Modal>
      <Modal
        open={isModalSell}
        onOk={showModalSell}
        onCancel={handleCancelSell}
      >
        <BuySellCurrencies />
      </Modal>
      <Modal open={isSwap} onOk={showModalSwap} onCancel={handleCancelSwap}>
        <SwapCurrencies />
      </Modal>
      <Drawer
        title="User Information:"
        onClose={onCloseAvatar}
        open={avatar}
        width={500}
      >
        <UserInfo />
      </Drawer>
    </header>
  );
};

export default Header;
