import { useMemo } from "react";
import Loading from "../components/Loading";
import Status from "../components/Status";
import Table from "../components/Table";

export const AccountDetailInstanceListing = ({ isLoading, data }) => {
  const columns = useMemo(
    () => [
      {
        Header: `ID`,
        accessor: "id",
      },
      {
        Header: `Instance ID`,
        accessor: "instance_id",
      },
      {
        Header: `Instance Type`,
        sortField: "instance_type",
      },
      {
        Header: `CPU`,
        accessor: "vcpu",
      },
      {
        Header: `RAM`,
        accessor: "instance_memory",
      },
      {
        Header: `Hourly Rate`,
        accessor: "on_demand_price",
      },
      {
        Header: `Status`,
        accessor: "status",
        Cell: ({ value }) => {
          return <Status status={value} />;
        },
      },
    ],
    [],
  );

  if (isLoading) {
    return <Loading />;
  }

  return <Table data={data || []} columns={columns} isLoading={isLoading} />;
};
