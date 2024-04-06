import { http } from "../utils/http";

export const fetchInstanceForAccount = async (id) => {
  const url = `account/${id}/instances`;

  const { data } = await http.get(url);
  return data;
};
