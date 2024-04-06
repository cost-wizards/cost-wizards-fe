import { Line } from "@ant-design/charts";

export const Cumulative = ({ data }) => {
  const config = {
    data,
    xField: "timestamp",
    yField: "value",
    height: 400,
    colorField: "category",
  };
  return <Line {...config} />;
};
