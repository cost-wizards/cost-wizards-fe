const INITIAL_STATE = {
  data: {
    CurrentInstance: {
      Instance: "t3.nano",
      CostPerHour: 0.0052,
    },
    SuggestedInstances: [
      {
        Instance: "t3.micro",
        Reason:
          "Based on the provided data, the t3.nano instance seems to be underutilized most of the time. The t3.micro instance offers more vCPUs and memory at a slightly higher cost, which can better handle the occasional spikes in CPU and memory utilization.",
        CostDifferenceCostPerHour: {
          CurrentCostPerHour: 0.0052,
          SuggestedCostPerHour: 0.0104,
          DifferenceCostPerHour: -0.0052,
        },
      },
      {
        Instance: "t3.small",
        Reason:
          "The t3.small instance provides even more vCPUs and memory compared to the t3.micro, which can handle higher CPU and memory utilization spikes more comfortably. However, the cost is also higher.",
        CostDifferencePerHour: {
          CurrentCostPerHour: 0.0052,
          SuggestedCostPerHour: 0.0208,
          DifferenceCostPerHour: -0.0156,
        },
      },
    ],
  },
};

/**
 * Map Reducer
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_RECOMMENDATION":
      console.log(action);
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
