import HomeAppBar from "../../Components/Ui/HomeLeyout/HomeAppBar/HomeAppBar";
import HeroSections from "../../Components/Ui/HomeLeyout/HeroSections/HeroSections";

const Home = () => {
  return (
    <div>
      <HomeAppBar />
      <div className="flex justify-center items-center h-full">
        <HeroSections />
      </div>
    </div>
  );
};

export default Home;
