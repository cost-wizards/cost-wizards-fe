import { useQuery } from "react-query";
import { fetchInstanceForAccount } from "../services/instances";

export const useInstancesForAccountQuery = ({ payload }) => {
  const queryKey = ["instance-for-account", payload];

  const { id } = payload;

  const query = useQuery(queryKey, async () => {
    return await fetchInstanceForAccount(id);
  });

  return {
    ...query,
  };
};
