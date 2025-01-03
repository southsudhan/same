import Header from "../Header/Header";
import Currencies from "./Currencies/Currencies";

const Main = () => {
  return (
    <div>
      <Header />
      <div className=" p-5">
        <Currencies />
      </div>
    </div>
  );
};

export default Main;
