const MenuItem = () => {
  return (
    <div>
      <nav className="lg:flex hidden space-x-6 justify-center items-center">
        <a href="#" className="text-gray-700 hover:text-orange-500" onClick={() => (document.location = "/traderoom")}>
          Exchange
        </a>
        <a href="#" className="text-gray-700 hover:text-orange-500">
          Buy Crypto
        </a>
        <a href="#" className="text-gray-700 hover:text-orange-500" onClick={()=>document.location = "market"}>
          Market
        </a>
        <a href="#" className="text-gray-700 hover:text-orange-500">
          Discover
        </a>
      </nav>
    </div>
  );
};

export default MenuItem;
