import { useQuery } from "react-query";
import { fetchAccounts } from "../services/account";

export const useAccountListQuery = () => {
  const queryKey = ["user-list"];

  const query = useQuery(queryKey, () => fetchAccounts(), {
    staleTime: 5 * 60 * 1000,
  });

  return {
    ...query,
  };
};
