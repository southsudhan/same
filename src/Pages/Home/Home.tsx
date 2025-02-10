import HomeAppBar from "../../Components/LeyOut/HomeLeyout/HomeAppBar/HomeAppBar";
import LandingSections from "../../Components/LeyOut/HomeLeyout/LandingSections/LandingSections";
import Footer from "../../Components/LeyOut/HomeLeyout/Footer/Footer";
import TableMarketLanding from "../../Components/LeyOut/HomeLeyout/TableMarketLanding/TableMarketLanding";
import SliderHome from "../../Components/LeyOut/HomeLeyout/SliderHome/SliderHome";
import QuestionBox from "../../Components/LeyOut/HomeLeyout/QueastionBox/QueastionBox";
import UserComment from "../../Components/LeyOut/HomeLeyout/UserComment/UserComment";

const Home = () => {
  return (
    <div className="justify-between items-center grid">
      <HomeAppBar />
      <LandingSections />
      <TableMarketLanding/>
      <SliderHome/>
      <QuestionBox/>
      <UserComment/>
      <Footer/>
    </div>
  );
};

export default Home;
