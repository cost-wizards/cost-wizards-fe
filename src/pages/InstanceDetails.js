import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Typography, Flex, Row, Col, Button } from "antd";
import InstanceCard from "../components/InstanceCard";
import { useInstanceDetailQuery } from "../query/useInstanceQuery";

const InstanceDetails = () => {
  const { Title } = Typography;

  const { id } = useParams();

  const { isLoading, data } = useInstanceDetailQuery({
    payload: {
      id,
    },
  });

  return (
    <div className="your-account">
      <Header />
      <Row align="center">
        <Col span={18}>
          <div className="instance-details-charts">
            <Title
              level={2}
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "600",
              }}
            >
              Instance 1
            </Title>
            <div>Charts</div>
          </div>

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
          <Flex align="center" justify="space-between" style={{ marginTop: "32px" }}>
            <div className="instance-details">
              <InstanceCard data={data} isLoading={isLoading} />
              <div className="magic-card">
                <Title level={2} style={{ fontWeight: 700, fontSize: "24px", margin: 0 }}>
                  Do you believe in MAGIC?
                </Title>
                <span className="magic-text">
                  If you do, that’s great! You can witness our tool cast some spells to lower your
                  monthly charges on AWS. If you don’t, get ready to start believing now.
                </span>

                <Button style={{ background: "#038E43", color: "white" }}>✨PERFORM MAGIC</Button>

                <span className="magic-text">
                  Click to explore your instance optimization options with our book of spells and a
                  tiny bit of AI potion.
                </span>
              </div>
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default InstanceDetails;
