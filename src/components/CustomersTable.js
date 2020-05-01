import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Paginate from "./Paginate";
import "./chart.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#676262",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {},
  },
}))(TableRow);

const useStyles = makeStyles({
  tableContainer: { borderRadius: 0, width: "1280px", margin: "30px auto" },
  table: {
    margin: "20px auto",
    maxWidth: "1200px",
    borderRadius: 0,
  },

  header: { fontSize: 20, borderRadius: 0 },
  row: { backgroundColor: "#e0e1e8" },
  para: {
    paddingLeft: 40,
  },
});

export default function CustomersTable({
  currentCustomers,
  customerPerPage,
  totalCustomers,
  setCurrentPage,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.tableContainer}>
      <Paper variant="outlined" className={classes.header}>
        <p className={classes.para}>Customers</p>
      </Paper>

      <TableContainer className={classes.table} component={Paper} elevation={0}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className={classes.row}>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Created</StyledTableCell>
              <StyledTableCell>Orders</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCustomers &&
              currentCustomers.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell>{row.firstName}</StyledTableCell>
                  <StyledTableCell>{row.lastName}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.created}</StyledTableCell>
                  <StyledTableCell>{row.orders}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="paginate">
        <Paginate
          customerPerPage={customerPerPage}
          totalCustomers={totalCustomers}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Paper>
  );
}
