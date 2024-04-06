import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import AccountListItem from "../components/AccountListItem";

import AccountName from "../assets/images/account-name.svg";
import CurrentCost from "../assets/images/current-cost.svg";
import NumberInstances from "../assets/images/numberinstances.svg";

const AccountDetailCards = (props) => {
  const { data } = props;

  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/account/${data.id}/details`);
      }}
      style={{
        cursor: "pointer",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }}
    >
      <AccountListItem imgName={AccountName} title={"Account Name"} value={data?.name || "N/A"} />

      <AccountListItem
        imgName={NumberInstances}
        title={"No. of instances"}
        value={data?.instance_count || 0}
      />

      <AccountListItem
        imgName={CurrentCost}
        title={"Current Cost"}
        value={`$ ${data?.total_cost_for_ec2 || 0}`}
      />
    </Card>
  );
};

export default AccountDetailCards;
