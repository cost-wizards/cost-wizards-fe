import React from "react";
import { Card } from "antd";

import AccountListItem from "../components/AccountListItem";

import AccountName from "../assets/images/account-name.svg";
import CurrentCost from "../assets/images/current-cost.svg";
import NumberInstances from "../assets/images/numberinstances.svg";

const AccountDetailCards = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <Card
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }}
    >
      <AccountListItem
        imgName={AccountName}
        title={"Account Name"}
        value={data.data?.name || "N/A"}
      />

      <AccountListItem
        imgName={NumberInstances}
        title={"No. of instances"}
        value={data.ec2_count || 0}
      />

      <AccountListItem
        imgName={CurrentCost}
        title={"Current Cost"}
        value={`$ ${data.total_ec2_cost || 0}`}
      />
    </Card>
  );
};

export default AccountDetailCards;
