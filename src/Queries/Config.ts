export const QueryKey = {
  CURRENCIES: "currencies",
};

export const EndPoints = {
  CURRENCIES: "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false",
};

export const StaleTime = {
    CURRENCIES_TIME: 2 * 60 * 1000,
};


export const StorageKey = {
    CURRENCIES_STORAGE: "Currencies_Token",
  };
  