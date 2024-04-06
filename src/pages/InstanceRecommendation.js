import React, { useMemo } from "react";
import { Typography, Row, Col } from "antd";
import BreadCrumbs from "../components/BreadCrumbs";
import Header from "../components/Header";
import Table from "../components/Table";
import { useSelector } from "react-redux";

const InstanceRecommendation = () => {
  const { Title } = Typography;

  const { data: recommendation } = useSelector((state) => state.recommendation);

  const columns = useMemo(
    () => [
      {
        Header: ``,
        accessor: "id",
      },
      {
        Header: `Current Instance`,
        accessor: "current_instance",
      },
      {
        Header: `Suggestion 1`,
        accessor: "sugg_1",
      },
      {
        Header: `Suggestion 2`,
        accessor: "sugg_2",
      },
    ],
    [],
  );

  const sug1 = recommendation.SuggestedInstances[0];
  const sug2 = recommendation.SuggestedInstances[1];
  const current = recommendation.CurrentInstance;

  const curr_per_hour = current.CostPerHour;
  const sugg1_per_hour = sug1?.CostDifferenceCostPerHour?.SuggestedCostPerHour;
  const sugg2_per_hour = sug2?.CostDifferenceCostPerHour?.SuggestedCostPerHour;

  const data = [
    {
      id: "ID",
      current_instance: current.Instance,
      sugg_1: sug1.Instance,
      sugg_2: sug2.Instance,
    },
    {
      id: "Yearly Cost",
      current_instance: `$ ${curr_per_hour * 24 * 30 * 365}`,
      sugg_1: `$ ${sugg1_per_hour * 24 * 30 * 365}`,
      sugg_2: `$ ${sugg2_per_hour * 24 * 30 * 365}`,
    },
    {
      id: "Monthly Cost",
      current_instance: `$ ${curr_per_hour * 24 * 30}`,
      sugg_1: `$ ${sugg1_per_hour * 24 * 30}`,
      sugg_2: `$ ${sugg2_per_hour * 24 * 30}`,
    },
    {
      id: "Monthly Saving",
      current_instance: "-",
      sugg_1: `$ ${Math.round(Math.abs(sugg1_per_hour - curr_per_hour) * 24 * 30, 2)}`,
      sugg_2: `$ ${Math.round(Math.abs(sugg2_per_hour - curr_per_hour) * 24 * 30, 2)}`,
    },
    {
      id: "Yearly Saving",
      current_instance: "-",
      sugg_1: `$ ${Math.round(Math.abs(sugg1_per_hour - curr_per_hour) * 24 * 30 * 12, 2)}`,
      sugg_2: `$ ${Math.round(Math.abs(sugg2_per_hour - curr_per_hour) * 24 * 30 * 12, 2)}`,
    },
    {
      id: "Reason",
      current_instance: "",
      sugg_1: sug1.Reason,
      sugg_2: sug2.Reason,
    },
  ];

  const breadcrumbItems = [
    {
      title: <a href="/account-overview">Account Overview</a>,
    },
    {
      title: <a href="">Instance Recommendations</a>,
    },
  ];

  const titleStyle = {
    fontWeight: "700",
  };

  return (
    <div>
      <Header />

      <Row align="center">
        <Col span={18}>
          <BreadCrumbs items={breadcrumbItems} />

          <div className="instance-table" style={{ marginTop: "20px" }}>
            <Table columns={columns} data={data} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InstanceRecommendation;
