import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TradeRoom from "./Pages/TradeRoom/TradeRoom";
import Market from "./Pages/Market/Market";
import Wallet from "./Pages/Wallet/Wallet";
import SignUp from "./Pages/SignUp/SignUp";
import Playground from "./Playground/Playground";
// import { useCurrencies } from "./Hooks/Currencies/useCurrencies";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <div className="w-screen h-screen">
      <NavigationBar />
      <BrowserRouter >
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
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
