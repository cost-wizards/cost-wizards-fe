import { http } from "../utils/http";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAccounts = () => {
  const url = `${BASE_URL}/accounts`;

  const { data } = http.get(url);
  console.log(data);
  return data;
};
