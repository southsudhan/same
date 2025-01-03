import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleTheme } from "../../../../Reducers/themeSlice";
import { Button } from "antd/es/radio";
import { Switch } from "antd";

const HomeAppBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex justify-between items-center p-4  bg-[#ffffff] border-b cursor-pointer ">
      <div className="flex items-center">
        <span className="text-black font-bold text-lg ml-1">Crypto</span>
        <span className="text-orange-500 font-bold text-lg">Hub</span>
      </div>

      <div className="justify-between items-center gap-4 lg:flex hidden ">
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
      <div className="flex  items-center gap-3">
        <Switch defaultChecked={theme === "dark"} onChange={handleToggle} />

        <Button
          onClick={() => (document.location = "/signup")}
          className="rounded-lg"
        >
          SignUp | Login
        </Button>
        <Button onClick={() => (document.location = "/traderoom")}  className="bg-orange-500  text-white border-none  lg:text-sm text-sm lg:px-8 px-3 py-1.5 rounded-md hover:text-white">
          Trade Now
        </Button>
      </div>
    </div>
  );
};

export default HomeAppBar;
