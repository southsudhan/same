import { Alert, Badge, Button, Input } from "antd";
import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModal } from "../../Reducers/modalSlice";
import ReusablePopover from "../ReusablePopover/ReusablePopover";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal(<div></div>));
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b cursor-pointer fixed w-full">
      <div className="flex items-center">
        <span className="text-black font-bold text-lg ml-1">Crypto</span>
        <span className="text-orange-500 font-bold text-lg">Hub</span>
      </div>
      <div>
        <nav className="lg:flex hidden space-x-6 justify-center items-center">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Exchange
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Buy Crypto
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Market
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Discover
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          size="middle"
          placeholder="Search Token, Coin, Airdrop "
          className="bg-gray-100 h-[40px] placeholder:text-gray-500 w-[350px]  lg:relative absolute lg:right-0 right-5 lg:top-0  top-20   outline-none border-none hover:bg-gray-100 "
          prefix={<BiSearch />}
        />
        <div className="flex items-center gap-2">
          <ReusablePopover title={<span className="font-bold">Help</span>}>
            <Badge dot onClick={handleOpenModal}>
              <BiNotification size={25} />
            </Badge>
          </ReusablePopover>
          <ReusablePopover title={<span className="font-bold">Private</span>}>
            <MdOutlinePrivacyTip size={25} />
          </ReusablePopover>

          <ReusablePopover
            title={
              <div className="font-bold">
                Notifications
                <Alert message="Success Text" type="info" closable />
                <Alert message="Success Text" type="success" closable />
                <Alert message="Success Text" type="error" closable />
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
        <Button className="bg-orange-500 lg:h-[40px] h-[35px] text-white border-none  lg:text-sm text-sm lg:px-8 px-2 py-2 rounded-md hover:text-white">
          MY Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
