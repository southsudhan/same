import { useSelector } from "react-redux";
import HomeAppBar from "../../Components/Ui/HomeLeyout/HomeAppBar/HomeAppBar";
import { RootState } from "../../store";
import HeroSections from "../../Components/Ui/HomeLeyout/HeroSections/HeroSections";

const Home = () => {

  const theme = useSelector((state: RootState) => state.theme);

    return ( 
        <div className={`${theme} `}>
            <HomeAppBar/>
            <div className="flex justify-center items-center h-full">
                <HeroSections/>
            </div>
        </div>
     );
}
 
export default Home;