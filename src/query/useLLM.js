import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRecommendationAction } from "../actions/recommendation.action";
import { predict } from "../services/llm";

export const useLLM = ({ payload }) => {
  const queryKey = ["llm-stat", payload];

  const { instanceId, locationId } = payload;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const query = useQuery(
    queryKey,
    async () => {
      const data = await predict(locationId, instanceId);
      dispatch(setRecommendationAction(data));
      navigate("/recommendations");
    },
    {
      enabled: false,
    },
  );

  return {
    ...query,
  };
};
