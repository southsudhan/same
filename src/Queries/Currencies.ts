import axios from "axios";
import { CoinDataResponse, CurrenciesModel } from "../Models/Currencies";
import { EndPoints } from "./Config";

export const getCurrencies = async (vs_currency?: string) => {
  const r = await axios.get<CurrenciesModel>(
    `${import.meta.env.VITE_API_URL}${EndPoints.CURRENCIES}${vs_currency || "usd"}`
  );
  return r.data;
};

export const getProductById = async (coin?: string) => {
  const r = await axios.get<CoinDataResponse  >(
    `${import.meta.env.VITE_API_URL}${EndPoints.COIN}/${coin}`
  );
  return r.data;
};
