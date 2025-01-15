const UserWallet = () => {
  return (
    <div className=" rounded-lg py-2 w-full  text-black  lg:overflow-auto overflow-scroll">
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Total Income</h3>
          <p className="text-2xl">$32,499.93</p>
          <p className="text-green-600">+ 12.95% Compared to last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Profit</h3>
          <p className="text-2xl">$10,499.93</p>
          <p className="text-red-600">- 0.33% Compared to last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Total Views</h3>
          <p className="text-2xl">5,211,832</p>
          <p className="text-green-600">+ 0.32% Compared to last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Conversion Rate</h3>
          <p className="text-2xl">4.83%</p>
          <p className="text-green-600">+ 8.05% Compared to last month</p>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
