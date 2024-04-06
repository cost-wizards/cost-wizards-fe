import { useQuery } from "react-query";
import { predict } from "../services/llm";

export const useLLM = ({ payload }) => {
  const queryKey = ["llm-stat", payload];

  const { instanceId, locationId } = payload;

  const query = useQuery(queryKey, async () => await predict(locationId, instanceId), {
    enabled: false,
    onSuccess: (data) => {},
  });

  return {
    ...query,
  };
};
