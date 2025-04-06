import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.ts";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import Home from "./Pages/Home/Home.tsx";
import TradeRoom from "./Pages/TradeRoom/TradeRoom.tsx";
import Market from "./Pages/Market/Market.tsx";
import Wallet from "./Pages/Wallet/Wallet.tsx";
import SignUp from "./Pages/SignUp/SignUp.tsx";
import { StrictMode } from "react";
import Currency from "./Pages/Currency/Currency.tsx";
import Playground from "./Playground/Playground.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* <App /> */}
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traderoom" element={<TradeRoom />} />
            <Route path="/market" element={<Market />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/currency/:coin" element={<Currency />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
