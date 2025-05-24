import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.ts";
import { Auth0ProviderWithConfig } from "./auth/Auth0ProviderWithConfig.tsx";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import Home from "./Pages/Home/Home.tsx";
import TradeRoom from "./Pages/TradeRoom/TradeRoom.tsx";
import Market from "./Pages/Market/Market.tsx";
import Wallet from "./Pages/Wallet/Wallet.tsx";
import SignUp from "./Pages/SignUp/SignUp.tsx";
import Currency from "./Pages/Currency/Currency.tsx";
import Playground from "./Playground/Playground.tsx";
import NotFound from "./Components/NotFound/NotFound.tsx";
import UpgradePro from "./Pages/UpgradePro/UpgradePro.tsx";
import Contact from "./Pages/Contact/Contact.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Auth0ProviderWithConfig>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traderoom" element={<TradeRoom />} />
            <Route path="/market" element={<Market />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/currency/:coin" element={<Currency />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/upgrade-pro" element={<UpgradePro />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </Auth0ProviderWithConfig>
);