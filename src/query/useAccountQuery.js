import { useQuery, useMutation, useQueryClient } from "react-query";
import { createAccount, fetchAccountDetail, fetchAccounts } from "../services/account";

export const useAccountListQuery = () => {
  const queryKey = ["account-list"];

  const query = useQuery(queryKey, async () => {
    return await fetchAccounts();
  });
  return {
    ...query,
  };
};

export const useAccountDetailQuery = ({ payload }) => {
  const queryKey = ["account-detail", payload];

  const { id } = payload;

  const query = useQuery(queryKey, async () => {
    return fetchAccountDetail(id);
  });

  return {
    ...query,
  };
};

export const useAccountCreationMutation = ({ onSuccess, onError }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createAccount, {
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries("account-list");
    },
    onError,
  });

  return {
    mutate,
    isLoading,
  };
};
