const TimeFarmChart = () => {
  return (
    <div className="flex justify-center gap-2 items-center text-[12px] text-gray-400 cursor-pointer ">
      <h2>Time:</h2>
      <p className="hover:text-orange-500">15m</p>
      <p className="hover:text-orange-500">1H</p>
      <p className="hover:text-orange-500">4H</p>
      <p className="hover:text-orange-500">1D</p>
      <p className="hover:text-orange-500">1W</p>
      <p className="hover:text-orange-500">1M</p>
    </div>
  );
};

export default TimeFarmChart;
