import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import TradeRoom from "./Pages/TradeRoom/TradeRoom";
import Market from "./Pages/Market/Market";
import Wallet from "./Pages/Wallet/Wallet";
import SignUp from "./Pages/SignUp/SignUp";
import Playground from "./Playground/Playground";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traderoom" element={<TradeRoom />} />
          <Route path="/market" element={<Market />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
