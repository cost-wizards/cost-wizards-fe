import Header from "../components/Header";
import AccountDetailCards from "../components/AccountDetailCards";
import React, { useState } from "react";
import CardOutlined from "../components/CardOutlined";
import Loading from "../components/Loading";

import { PlusOutlined } from "@ant-design/icons";

import { useAccountListQuery } from "../query/useAccountQuery";
import { Typography, Row, Col, Flex, Button, Modal } from "antd";
import AccountNewForm from "./AccountNewForm";
import SetupEcInstance from "./SetupEcInstance";

const AccountOverview = () => {
  const { Title } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEcModalOpen, setEcIsModalOpen] = useState(false);

  const { isLoading, data } = useAccountListQuery();
  // handle modal for Add Account
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [accountId, setAccountId] = useState(null);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const renderAccountList = () => {
    if (isLoading) return <Loading />;

    return data?.map((d) => {
      return <AccountDetailCards data={d} />;
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // handle modal for Setup EC2 Instance
  const showEcModal = (data) => {
    setEcIsModalOpen(true);
    setIsModalOpen(false);
    setAccountId(data);
  };

  const handleEcOk = () => {
    setEcIsModalOpen(false);
  };

  const handleEcCancel = () => {
    setEcIsModalOpen(false);
  };

  const titleStyle = {
    fontWeight: "700",
  };

  const monthlyCost = () => {
    const sum =
      data?.map((d) => d.total_cost_for_ec2)?.reduce((partialSum, a) => partialSum + a, 0) || 0;
    return sum;
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
              totalNumber={data?.length || 0}
              name="Connected Accounts"
              subtitle="Your linked AWS accounts"
            />

            <CardOutlined
              totalNumber={`$ ${monthlyCost()}`}
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
              <Button
                icon={<PlusOutlined />}
                style={{ background: "#038E43", color: "white" }}
                onClick={showModal}
              >
                Add new account
              </Button>
            </Flex>
          </div>

          <Flex align="center" justify="flex-start" wrap="wrap" gap="24px" style={{ marginTop: "32px" }}>
            {renderAccountList()}
          </Flex>
        </Col>
      </Row>

      {/* Modal for New Account */}
      <Modal
        title="Add new account"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <AccountNewForm showEcModal={showEcModal} />
      </Modal>

      {/* Modal for Setting up EC2 Instance */}
      <Modal
        title="Setup EC2 Instances"
        open={isEcModalOpen}
        onOk={handleEcOk}
        onCancel={handleEcCancel}
        footer={[]}
      >
        <SetupEcInstance accountId={accountId} />
      </Modal>
    </div>
  );
};

export default AccountOverview;
