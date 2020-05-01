import React, { useState, useEffect } from "react";
import CustomersTable from "./components/CustomersTable";
import LineChart from "./components/LineChart.js";
import BarChart from "./components/BarChart.js";
import "./App.css";
function App() {
  const [customers, setCustomers] = useState(null);
  const [order, setOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [customerPerPage] = useState(5);
  const [currentCustomers, setCurrentCustomers] = useState();
  const [totalCustomers] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/anadahalli/interview/master/db.json"
    )
      .then((response) => response.json())
      .then((Customers) => {
        setCustomers(Customers.customers);
        setOrder(Customers.orders);
      });
  }, []);

  useEffect(() => {
    // get current customers

    if (customers) {
      const indexOfLastCustomer = currentPage * customerPerPage; //10
      const indexOfFirstCustomer = indexOfLastCustomer - customerPerPage; //0
      const CustomersDetails = customers.slice(
        indexOfFirstCustomer,
        indexOfLastCustomer
      );

      setCurrentCustomers(CustomersDetails);
    }
  }, [customers, currentPage]);

  return (
    <div className="App">
      <div className="chartContainer">
        <BarChart customers={customers} />
        <LineChart order={order} />
      </div>

      {customers && (
        <CustomersTable
          currentCustomers={currentCustomers}
          customerPerPage={customerPerPage}
          totalCustomers={customers.length}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
