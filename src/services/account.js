import { http } from "../utils/http";

export const fetchAccounts = () => {
  const url = `/accounts`;

  const { data } = http.get(url);
  console.log(data);
  return data;
};
