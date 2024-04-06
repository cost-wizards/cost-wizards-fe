import Header from "../components/Header";
import CardOutlined from "../components/CardOutlined";
import AccountDetailCards from "../components/AccountDetailCards";

import { PlusOutlined } from "@ant-design/icons";

import { Typography, Row, Col, Flex, Button } from "antd";

import { useAccountListQuery } from "../query/useAccountQuery";

const AccountOverview = () => {
  const { Title } = Typography;

  const { isLoading, data } = useAccountListQuery();

  const titleStyle = {
    fontWeight: "700",
  };

  const renderAccountList = () => {
    if (isLoading) return <div> Loading </div>;

    return data.map((d) => {
      return <AccountDetailCards data={d} />;
    });
  };

  return (
    <div>
      <Header />

      <Row align="center">
        <Col span={18}>
          <Title level={2} style={titleStyle}>
            AWS Accounts Overview
          </Title>

          <Flex gap="middle" align="start" style={{ marginTop: "32px" }}>
            <CardOutlined
              totalNumber="3"
              name="Connected Accounts"
              subtitle="Your linked AWS accounts"
            />

            <CardOutlined
              totalNumber="$ 4000.00"
              name="Monthly Cost"
              subtitle="Current monthly charges"
            />

            <CardOutlined
              totalNumber="25"
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
                Your Accounts
              </Title>
              <Button icon={<PlusOutlined />} style={{ background: "#038E43", color: "white" }}>
                Add New Button
              </Button>
            </Flex>
          </div>

          <Flex align="center" justify="space-between" gap="24px" style={{ marginTop: "32px" }}>
            {renderAccountList()}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default AccountOverview;
