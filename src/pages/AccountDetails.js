import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CardOutlined from "../components/CardOutlined";
import AccountDetailCards from "../components/AccountDetailCards";

import { Typography, Row, Col, Flex, Button } from "antd";
import { useAccountDetailQuery } from "../query/useAccountQuery";
import { AccountDetailInstanceListing } from "./AccountDetailInstanceListing";
import { useInstancesForAccountQuery } from "../query/useInstanceQuery";
import Loading from "../components/Loading";

const AccountDetails = () => {
  const { Title } = Typography;

  const { id } = useParams();

  const { isLoading, data } = useAccountDetailQuery({ payload: { id } });

  const { isLoading: isTableDataLoading, data: tableData } = useInstancesForAccountQuery({
    payload: { id },
  });

  const titleStyle = {
    fontWeight: "700",
  };

  if (isLoading) {
    return <Loading />;
  }
  console.log(tableData);

  return (
    <div>
      <Header />

      <Row align="center">
        <Col span={18}>
          <Title level={2} style={titleStyle}>
            AWS Accounts Details
          </Title>

          <div className="account-detail-card">
            {isLoading ? (
              <Loading />
            ) : (
              <AccountDetailCards data={data || {}} count={tableData?.length || 0} />
            )}
          </div>

          <Flex gap="middle" align="start" style={{ marginTop: "32px" }}>
            <CardOutlined
              totalNumber={tableData?.length || 0}
              name="AWS instances"
              subtitle="Total AWS instances in your account."
            />

            <CardOutlined
              totalNumber="$ 4000.00"
              name="Monthly Cost"
              subtitle="Current monthly charges"
            />

            <CardOutlined
              totalNumber={data?.optimization_runs}
              name="Optimizations Run"
              subtitle="25 optimization remaining"
            />

            <CardOutlined
              totalNumber="$ 2300.00"
              name="Estimated Cost Savings"
              subtitle="42% saving/month"
            />
          </Flex>

          <div className="your-account">
            <Flex align="center" justify="space-between" style={{ marginTop: "32px" }}>
              <Title
                level={2}
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: "700",
                }}
              >
                Instance Details
              </Title>
            </Flex>
          </div>

          <Flex align="center" justify="space-between" gap="24px" style={{ marginTop: "32px" }}>
            <AccountDetailInstanceListing isLoading={isTableDataLoading} data={tableData} />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default AccountDetails;
