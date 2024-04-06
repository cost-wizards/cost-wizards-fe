import { http } from "../utils/http";

export const fetchAccounts = async () => {
  const url = `accounts`;

  const { data } = await http.get(url);
  return data;
};

export const fetchAccountDetail = async (id) => {
  const url = `accounts/${id}`;

  const { data } = await http.get(url);
  return data;
};
