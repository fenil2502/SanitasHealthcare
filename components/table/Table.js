import React, { useState } from "react";
import Pagination from "./PaginationCustom";
import PageLoader from "../common/pageLoader/PageLoader";

const defaultScopeAction = (element, value) => {
  return value ? (
    <td className="text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div
        className={`inline-flex font-medium rounded-full text-center bg-emerald-500 px-2.5 py-0.5 `}
      >
        Active
      </div>
    </td>
  ) : (
    <td className=" text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div
        className={`inline-flex font-medium rounded-full text-center  bg-red-500 px-2.5 py-0.5 `}
      >
        In Active
      </div>
    </td>
  );
};
const availabilityAction = (element, value) => {
  return (
    <>
      {(() => {
        switch (value) {
          case 1:
            return (
              <td className="text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div
                  className={`inline-flex rounded-full text-center bg-emerald-500 px-2.5 py-0.5 `}
                >
                  <i className=" icon-sm fal fa-check-circle fw-bold mt-1 mr-1"></i>{" "}
                  In Stock
                </div>
              </td>
            );
          case 2:
            return (
              <td className="text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div
                  className={`inline-flex rounded-full text-center bg-emerald-500 px-2.5 py-0.5 `}
                >
                  <i className=" icon-sm fal fa-history fw-bold mt-1 mr-1"></i>{" "}
                  Backordered
                </div>
              </td>
            );

          case 3:
            return (
              <td className="text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div
                  className={`inline-flex rounded-full text-center bg-emerald-500 px-2.5 py-0.5 `}
                >
                  <i className="icon-sm fal fa-ban fw-bold mt-1 mr-1"></i>{" "}
                  Suspended
                </div>
              </td>
            );

          case 4:
            return (
              <td className="text-lg px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div
                  className={`inline-flex rounded-full text-center bg-emerald-500 px-2.5 py-0.5 `}
                >
                  <i className=" icon-sm fal fa-conveyor-belt-alt fw-bold mt-1 mr-1"></i>{" "}
                  In Production
                </div>
              </td>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

const defaultScope = [
  {
    column: "isActive",
    renderTableData: defaultScopeAction.bind(this),
  },
  {
    column: "availabilityId",
    renderTableData: availabilityAction.bind(this),
  },
];

//Dynamic row binding into the table
export function Rows(props) {
  return (
    props &&
    props.columns &&
    props.columns.map((element, key) => {
      return props.customScope &&
        props.customScope.filter(
          (c) => c.column.toLowerCase() === element.name.toLowerCase()
        ).length > 0 ? (
        props.customScope
          .filter(
            (c) => c.column.toLowerCase() === element.name.toLowerCase()
          )[0]
          .renderTableData(
            element.name,
            props.index,
            props.tableData[
            Object.keys(props.tableData).find(
              (objKey) => objKey.toLowerCase() === element.name.toLowerCase()
            )
            ]
          )
      ) : props.defaultScope &&
        props.defaultScope.filter(
          (c) => c.column.toLowerCase() === element.name.toLowerCase()
        ).length > 0 ? (
        props.defaultScope
          .filter(
            (c) => c.column.toLowerCase() === element.name.toLowerCase()
          )[0]
          .renderTableData(
            element.name,
            props.tableData[
            Object.keys(props.tableData).find(
              (objKey) => objKey.toLowerCase() === element.name.toLowerCase()
            )
            ]
          )
      ) : (
        <td
          className={
            props.isCollapsedSection
              ? "px-2 first:pl-5 last:pr-5 whitespace-nowrap tble-td-txt pointer"
              : "px-2 first:pl-5 last:pr-5 whitespace-nowrap tble-td-txt"
          }
          onClick={() =>
            props.isCollapsedSection
              ? props.setCollapse(props.index, props.isCollapsed)
              : null
          }
        >
          {
            props.tableData[
            Object.keys(props.tableData).find(
              (objKey) => objKey.toLowerCase() === element.name.toLowerCase()
            )
            ]
          }
        </td>
      );
    })
  );
}

const Table = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [basePageNo, setBasePageNo] = useState(1);
  // Sorting handler
  const handleSorting = (columnName, value) => {
    props.pagination.pageNo = 1;
    props.pagination.orderByColumn = columnName;
    props.pagination.orderFlag = value ? 1 : 0;
    props.setPagination(props.pagination);
  };

  const handlePageChange = (pageNumber, isButton = false) => {
    if (
      props.pagination.pageNo !== pageNumber &&
      pageNumber > 0 &&
      pageNumber <= Math.ceil(props.totalCount / props.pagination.pageSize)
    ) {
      if (pageNumber > props.pagination.pageNo && pageNumber - basePageNo > 1) {
        setBasePageNo(pageNumber + 1);
      } else if (
        pageNumber < props.pagination.pageNo &&
        pageNumber > 1 &&
        basePageNo - pageNumber === 0
      ) {
        setBasePageNo(pageNumber - 1);
      } else if (isButton && pageNumber > 1) {
        setBasePageNo(pageNumber - 1);
      }
      props.pagination.pageNo = pageNumber;
      props.setPagination(props.pagination);
      setInputValue(pageNumber);
    }
  };

  const [inputValue, setInputValue] = React.useState(props.pagination.pageNo);

  const onChangeHandler = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setInputValue(event.target.value);
      handlePageChange(event.target.value + inputValue, true);
    }
  };

  return (
    <div>
      {props.isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <div className="overflow-x-auto mx-2 mt-2">
            <table className="w-full bg-white shadow-lg rounded-sm ">
              {/* Table header */}
              <thead className="table-bg text-xs font-semibold capitalize text-[#757575] ">
                <tr>
                  {props &&
                    props.columns.map((value, key) => {
                      return (
                        <th
                          className="px-2 first:pl-5 last:pr-5 tbl-th whitespace-nowrap text-white"
                          key={key}
                        >
                          <div className="font-bold tble-th-txt text-center">
                            {value.title}
                            {props.sortingColumns.includes(value.name) ? (
                              props.pagination.orderFlag === 1 &&
                                props.pagination.orderByColumn.toLowerCase() ===
                                value.name.toLowerCase() ? (
                                <i
                                  className="fas fa-angle-double-down pl-3"
                                  onClick={() =>
                                    handleSorting(
                                      value.name,
                                      !props.pagination.orderFlag
                                    )
                                  }
                                ></i>
                              ) : (
                                <i
                                  className="fas fa-angle-double-up pl-3"
                                  onClick={() =>
                                    handleSorting(
                                      value.name,
                                      !props.pagination.orderFlag
                                    )
                                  }
                                ></i>
                              )
                            ) : null}
                          </div>
                        </th>
                      );
                    })}
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm custom-tbody">
                {props && props.rows && props.rows.length > 0 ? (
                  props.rows.map((value, key) => {
                    return (
                      <>
                        <tr className="custom-tbl-td" key={key}>
                          <Rows
                            key={key}
                            columns={props.columns}
                            tableData={value}
                            customScope={props.customScope}
                            defaultScope={defaultScope}
                            index={key}
                            setCollapse={props.setCollapse}
                            isCollapsedSection={props.isCollapsedSection}
                            isCollapsed={value.isCollapsed}
                          />
                        </tr>
                        {value.isCollapsed
                          ? props.collapsibleSection(value)
                          : null}
                      </>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={props.columns.length}
                      className="text-lg not-found-record"
                    >
                      <i className="fas fa-empty-set pr-2"></i>No Records Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <div className="text-sm text-[#757575] text-center sm:text-left mb-5">
              <div className="no-of-page-title flex justify-end my-10 mx-5">
                <p className="text-xl mobile-14">
                  Showing{" "}
                  <span className="mobile-14">
                    {props.totalResultes === 0 ? 0 :
                      (props.pagination.pageNo * props.pagination.pageSize -
                        props.pagination.pageSize +
                        1)}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-slate-600">
                    {props.totalResultes < (props.pagination.pageNo * props.pagination.pageSize)
                      ? (props.pagination.pageNo * props.pagination.pageSize) + (props.totalResultes - (props.pagination.pageNo * props.pagination.pageSize))
                      : (props.pagination.pageNo * props.pagination.pageSize)}
                  </span>{" "}
                  of <span className="mobile-14">{props.totalResultes}</span>{" "}
                  results
                </p>
              </div>
            </div>
          </div>
          <div className="pagination-arrow mb-10">
            <nav
              className="flex justify-between"
              role="navigation"
              aria-label="Navigation"
            >
              <div className="grow text-center">
                <div>
                  <nav
                    className="flex items-center justify-around"
                    role="navigation"
                    aria-label="Navigation"
                  >
                    <div className="mr-2 cursor-pointer">
                      {/* className="btn bg-white border-[#757575] theme-color hover:text-[#C00000] py-4 pagination-btn" */}
                      <div
                        className={`cursor-pointer mobile-14 btn bg-white px-14 pagination-navigator text-[#757575] inline-block border border-[#757575] hover:text-[#C00000] py-4 pagination-btn ${props.pagination.pageNo > 1
                          ? "hover:border-[#C00000] cursor-pointer btn bg-white inline-block border border-[#757575] theme-color hover:text-[#C00000] py-4 pagination-btn"
                          : "text-[#757575] cursor-not-allowed hover:border-[#757575] hover:text-[#757575]"
                          }`}
                        disabled={props.pagination.pageNo > 1 ? false : true}
                        onClick={() =>
                          handlePageChange(props.pagination.pageNo - 1, true)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <span className="md:mr-4 mr-1">
                            <img
                              className="pagination-arrow left rotate-180 md:w-4 w-3"
                              src="/right-arrow-icon.svg" alt=""
                            ></img>
                          </span>
                          <span className="2xl:text-xl lg:text-lg text-base mobile-14">
                            Previous
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <ul className="flex items-center text-sm font-medium -space-x-px">
                        <li className="flex item-center">
                          {/* <input
                            className="mobile-14 inline-flex items-center justify-center leading-5 2xl:h-[40px] 2XL:w-[80px] LG:h-[40px] LG:w-[80px] h-[25px] w-[30px]  px-2 text-center text-xl bg-white border border-[#757575] theme-color shadow-sm"
                            type="text"
                            name="name"
                            onChange={(e) => onChangeHandler(e)}
                            value={inputValue}
                          /> */}
                          <div
                            className="mobile-14 inline-flex items-center justify-center leading-5 text-xl"
                            href="#0"
                          >
                            <span className="md:w-5 w-auto md:pt-0 pt-1">
                              {" "}
                              {/* {Math.ceil(inputValue) } */}
                              {props.pagination.pageNo}
                            </span>
                          </div>
                        </li>

                        <li className="flex item-center">
                          <span className="mobile-14 inline-flex items-center justify-center whitespace-nowrap text-xl md:mx-4 mx-2 theme-color md:pt-0 pt-1">
                            Of
                          </span>
                        </li>
                        <li className="flex item-center">
                          <div
                            className="mobile-14 inline-flex items-center justify-center leading-5 text-xl theme-color"
                            href="#0"
                          >
                            <span className="md:w-5 w-auto md:pt-0 pt-1">
                              {" "}
                              {Math.ceil(
                                props.totalCount / props.pagination.pageSize
                              )}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ml-2">
                      <div
                        className={` mobile-14 cursor-pointer btn bg-white inline-block pagination-navigator px-14 text-[#757575]  border border-[#757575] theme-color hover:text-[#C00000] py-4 pagination-btn ${Math.ceil(
                          props.totalCount / props.pagination.pageSize
                        ) > props.pagination.pageNo
                          ? "hover:border-[#C00000] inline-block border  border-[#757575] theme-color hover:text-[#C00000] cursor-pointer"
                          : "text-[#757575] cursor-not-allowed hover:border-[#757575]"
                          }`}
                        onClick={() =>
                          handlePageChange(props.pagination.pageNo + 1, true)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <span className="2xl:text-xl lg:text-lg text-base mobile-14">
                            Next
                          </span>
                          <span className="md:ml-4 ml-1">
                            <img
                              className="pagination-arrow right md:w-4 w-3"
                              src="/right-arrow-icon.svg" alt=""
                            ></img>
                          </span>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
          <div className="mt-1 hidden">
            <Pagination
              className="pagination"
              currentPage={currentPage}
              totalCount={props.columns.length}
              pageSize={props.pagination.pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
