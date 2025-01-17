import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import TradeRoom from "./Pages/TradeRoom/TradeRoom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Market from "./Pages/Market/Market";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traderoom" element={<TradeRoom />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
