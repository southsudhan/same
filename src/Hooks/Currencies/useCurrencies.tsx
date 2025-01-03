import { useQuery } from "@tanstack/react-query";
import { QueryKey, StaleTime } from "../../Queries/Config";
import { getCurrencies } from "../../Queries/Currencies";

export const useCurrencies = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKey.CURRENCIES],
    queryFn: getCurrencies,
    staleTime: StaleTime.CURRENCIES_TIME,
  });

  return { data, isLoading, error };
};
