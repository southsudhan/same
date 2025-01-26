import Button from "../../../BasedComponents/BaseUi/Button/Button";

const LandingSections = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 gap-3 bg-white ">
      {/* Header Text */}
      <p>--- BlockChain orcale for market data ---</p>
      <h1 className="lg:text-5xl text-lg font-bold text-center mb-2 grid">
        <span className="text-black">Smarter Data for </span>
        <span className="text-orange-600">Smarter Contracts</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 lg:text-lg text-sm text-center mb-6 lg:w-1/2 w-full p-5">
        Secure your smart contracts with reliable, low-latency market data from
        institutional sources. Build apps with high-fidelity oracle feeds
        designed for mission-critical systems.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Button width={150} onClick={() => (document.location = "/traderoom")}>
          Trade now
        </Button>
        <Button
          width={150}
          border="orange solid 1px"
          bgColor="#FFFFFF"
          color="orange"
          onClick={() => (document.location = "/signup")}
        >
          Register now
        </Button>
      </div>
    </div>
  );
};

export default LandingSections;
