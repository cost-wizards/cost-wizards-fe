import { http } from "../utils/http";

export const fetchInstanceForAccount = async (id) => {
  const url = `account/${id}/instances`;

  const { data } = await http.get(url);
  return data;
};

export const fetchInstanceDetail = async (id) => {
  const url = `instance/${id}/detail`;

  const { data } = await http.get(url);
  return data;
};
