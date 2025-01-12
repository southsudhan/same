import axios from "axios";
import { CurrenciesModel } from "../Models/Currencies";
import { EndPoints } from "./Config";

export const getCurrencies = async () => {
    const r = await axios.get<CurrenciesModel>(
      `${import.meta.env.VITE_API_URL}${EndPoints.CURRENCIES}`  

    );  
    return r.data;
  };


  export const getProductById = async (id: string) => {
    const r = await axios.get<CurrenciesModel>(
      `${import.meta.env.VITE_API_URL}${EndPoints.CURRENCIES}`
    );
    return r.data;
  };
  