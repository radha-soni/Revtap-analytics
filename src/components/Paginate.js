import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function Paginate({
  totalCustomers,
  customerPerPage,
  setCurrentPage,
}) {
  const pages = Math.ceil(totalCustomers / customerPerPage);

  function handleClick(event, value) {
    setCurrentPage(value);
  }
  return (
    <>
      <Pagination count={pages} onChange={handleClick} />
    </>
  );
}
