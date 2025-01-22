import HomeAppBar from "../../Components/BasedComponents/HomeLeyout/HomeAppBar/HomeAppBar";
import HeroSections from "../../Components/BasedComponents/HomeLeyout/HeroSections/HeroSections";
import IntroApps from "../../Components/BasedComponents/HomeLeyout/IntroApps/IntroApps";
import Footer from "../../Components/BasedComponents/HomeLeyout/Footer/Footer";

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
