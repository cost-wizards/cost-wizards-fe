import { Line } from "@ant-design/charts";

export const CPUUtilization = ({ data }) => {
  const config = {
    data,
    xField: "timestamp",
    yField: "value",
    height: 400,
    colorField: "category",
  };
  return <Line {...config} />;
};
