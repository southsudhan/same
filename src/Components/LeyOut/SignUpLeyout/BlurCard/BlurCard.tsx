import { BiSupport } from "react-icons/bi";

const BlurCard = () => {
  return (
    <div
      className="absolute bottom-14 left-10 md:left-16 text-white lg:w-[800px] max-w-full h-[200px] p-5
         bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-[17.5px] justify-center gap-5  flex-col md:flex hidden lg:text-sm text-[12px]"
    >
      <h2 className="lg:text-lg text-sm text-gray-300 first-letter:text-orange-500">
        Go anywhere you want in a Galaxy full of wonders!
      </h2>
      <p className="text-gray-100">
        this is user account page you can see more data info about traderoom you
        shoud see info for best cureenss
        <br />
        am i looking for best practic esy to use traed room
      </p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-white font-bold text-lg ml-1">Crypto </span>
          <span className="text-orange-500 font-bold text-lg">Hub</span>
        </div>
        <BiSupport />
      </div>
    </div>
  );
};

export default BlurCard;
