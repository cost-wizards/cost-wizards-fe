import { useQuery } from "react-query";
import { fetchInstanceDetail, fetchInstanceForAccount } from "../services/instances";

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

export const useInstanceDetailQuery = ({ payload }) => {
  const queryKey = ["instance-detail", payload];

  const { id } = payload;

  const query = useQuery(queryKey, async () => fetchInstanceDetail(id));

  return {
    ...query,
  };
};
