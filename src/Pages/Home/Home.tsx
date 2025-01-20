import HomeAppBar from "../../Components/Ui/HomeLeyout/HomeAppBar/HomeAppBar";
import HeroSections from "../../Components/Ui/HomeLeyout/HeroSections/HeroSections";
import Footer from "../../Components/Ui/HomeLeyout/Footer/Footer";
import IntroApps from "../../Components/Ui/HomeLeyout/IntroApps/IntroApps";

const Home = () => {
  return (
    <>
      <HomeAppBar />
      <HeroSections />
      <IntroApps/>
      <Footer/>
    </>
  );
};

export default Home;
