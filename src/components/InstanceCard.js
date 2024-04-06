import React from "react";
import { Card } from "antd";

import AccountListItem from "../components/AccountListItem";
import Status from "./Status";

import AccountName from "../assets/images/account-name.svg";
import CPU from "../assets/images/cpu.svg";
import RAM from "../assets/images/ram.svg";
import CurrentCost from "../assets/images/current-cost.svg";
import StatusIcon from "../assets/images/status.svg";
import Loading from "./Loading";

const InstanceCard = ({ data, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }}
    >
      <AccountListItem imgName={AccountName} title={"Name"} value={data.name} />

      <AccountListItem imgName={CPU} title={"CPU"} value={data.vcpu} />

      <AccountListItem imgName={RAM} title={"Instance Type"} value={data.instance_type} />

      <AccountListItem imgName={RAM} title={"RAM"} value={data.instance_memory} />

      <AccountListItem
        imgName={RAM}
        title={"Network Performance"}
        value={data.network_performance}
      />

      <AccountListItem imgName={CurrentCost} title={"Cost per hour"} value={data.on_demand_price} />

      <AccountListItem
        imgName={StatusIcon}
        title={"Status"}
        value={<Status status={data.status} />}
      />
    </Card>
  );
};

export default InstanceCard;
