import { http } from "../utils/http";

export const predict = async (accountId, instanceId) => {
  const url = `/account/${accountId}/instance/${instanceId}/predict`;

  const { data } = http.get(url);

  return data;
};
