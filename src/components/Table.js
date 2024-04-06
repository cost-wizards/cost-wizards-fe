import React, { useMemo } from "react";
import { useExpanded, useFlexLayout, useSortBy, useTable } from "react-table";

const Table = ({
  manualSortBy,
  columns,
  data,
  tableClassName,
  onRowClick,
  renderRowSubComponent,
  isLoading,
  emptyScreen,
  onHeaderClick = () => {},
}) => {
  const getStyles = (props, align = "left") => [
    props,
    {
      style: {
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        alignItems: "flex-start",
        display: "flex",
      },
    },
  ];

  const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

  const defaultColumn = useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 40, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  const memoizedData = useMemo(() => data, [data]);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns: memoizedColumns,
      data: memoizedData,
      defaultColumn,
      tableClassName,
      autoResetSortBy: false,
      manualSortBy,
    },
    useSortBy,
    useExpanded,
    useFlexLayout,
  );

  const buildRows = () => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <>
          {!row.isExpanded ? (
            <div
              {...row.getRowProps()}
              key={row.id}
              className="lf-table__row"
              onClick={() => {
                const { onClick } = row.getToggleRowExpandedProps();
                renderRowSubComponent && onClick();
                onRowClick && onRowClick(row.original);
              }}
            >
              {row.cells.map((cell) => {
                return (
                  <div
                    key={cell.row.index}
                    {...cell.getCellProps(cellProps)}
                    className="lf-table__col"
                  >
                    {cell.render("Cell")}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="table__subComponent__wrapper" key={row.id}>
              <div
                {...row.getRowProps()}
                className="lf-table__row"
                onClick={() => {
                  onRowClick && onRowClick(row.original);
                  const { onClick } = row.getToggleRowExpandedProps();
                  renderRowSubComponent && onClick();
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <>
                      <div
                        key={cell.row.index}
                        {...cell.getCellProps(cellProps)}
                        className="lf-table__col"
                      >
                        {cell.render("Cell")}
                      </div>
                    </>
                  );
                })}
              </div>
              {renderRowSubComponent && renderRowSubComponent({ row })}
            </div>
          )}
        </>
      );
    });
  };

  const buildEmptyRow = () => {
    if (emptyScreen) return emptyScreen();

    return (
      <div className="bg-grey-25 table__empty flex-column">
        <p className="text-grey-60">No data available</p>
      </div>
    );
  };

  const buildTableBody = () => {
    return rows.length > 0 ? buildRows() : buildEmptyRow();
  };

  const getSortingIcons = (direction) => {
    return null;
  };

  return (
    <div {...getTableProps()} className={`lf-table ${tableClassName}`} id="table">
      {headerGroups.map((headerGroup, i) => (
        <div {...headerGroup.getHeaderGroupProps()} className="lf-table__head-row" key={i}>
          {headerGroup.headers.map((column, i) => (
            <div
              key={i}
              {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))}
              onClick={() => onHeaderClick(column)}
              className={`lf-table__col lf-table__col--head headerWithIcon ${
                column.isSorted ? "text-grey-800" : ""
              }`}
            >
              {column.render("Header")}
              {!column.disableSortBy && <span>{getSortingIcons(column.sortDirection)}</span>}
            </div>
          ))}
        </div>
      ))}
      <div className="lf-table__body" data-cy="table-body">
        {!isLoading ? (
          buildTableBody()
        ) : (
          <div className="spinner__table">
            <span>Just a moment</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Table;
