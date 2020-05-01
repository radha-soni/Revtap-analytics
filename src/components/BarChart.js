import React from "react";
import { Bar } from "react-chartjs-2";

import Paper from "@material-ui/core/Paper";
import "./chart.css";

export default function BarChart({ customers }) {
  const created = [];
  const orderCount = [];

  if (customers) {
    customers.forEach((element) => {
      created.push(element.created.slice(0, 10));
    });
    removeDuplicate(created);
  }
  function removeDuplicate(created) {
    created.splice(0, created.length, ...new Set(created));
    created.forEach((element) => {
      let value = 0;
      customers.forEach((date) => {
        if (element === date.created.slice(0, 10)) {
          value = value + Number(date.orders);
        }
      });
      orderCount.push(value);
    });
  }
  const state = {
    labels: created,

    datasets: [
      {
        label: "Orders",
        backgroundColor: "#1976d2",

        borderWidth: 2,
        data: orderCount,
        barThickness: 10,
      },
    ],
  };
  return (
    <Paper elevation={3} className="bar">
      <div>
        <p>Orders Count</p>
      </div>

      <Bar
        data={state}
        width={600}
        height={400}
        options={{
          title: {
            display: false,
            text: "Orders Count",
            fontSize: 20,
          },
          scales: {
            offset: false,

            xAxes: [
              {
                type: "time",
                distribution: "linear",
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          responsive: false,
        }}
      />
    </Paper>
  );
}
