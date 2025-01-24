import HomeAppBar from "../../Components/LeyOut/HomeLeyout/HomeAppBar/HomeAppBar";
import LandingSections from "../../Components/LeyOut/HomeLeyout/LandingSections/LandingSections";
import IntroApps from "../../Components/LeyOut/HomeLeyout/IntroApps/IntroApps";
import Footer from "../../Components/LeyOut/HomeLeyout/Footer/Footer";
import TableMarketLanding from "../../Components/LeyOut/HomeLeyout/TableMarketLanding/TableMarketLanding";

const Home = () => {
  return (
    <>
      <HomeAppBar />
      <LandingSections />
      <TableMarketLanding/>
      <IntroApps/>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
