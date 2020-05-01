import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import "./chart.css";

export default function LineChart({ order }) {
  const created = [];
  const prices = [];

  if (order) {
    order.forEach((element) => {
      created.push(element.created.slice(0, 10));
    });
    created.sort();
    removeDuplicate(created);
  }

  function removeDuplicate(created) {
    created.splice(0, created.length, ...new Set(created));
    created.forEach((element) => {
      let value = 0;
      order.forEach((date) => {
        if (element === date.created.slice(0, 10)) {
          value = value + Number(date.price);
        }
      });
      prices.push(value);
    });
  }
  const data = {
    labels: created,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "#1976d2",
        borderWidth: 2,
        pointStyle: "circle",
        radius: 1,
        data: prices,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
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
  };

  return (
    <Paper elevation={3} className="paper">
      <div>
        <p>Orders Total Price</p>
      </div>
      <Line data={data} height={400} width={600} options={options} />
    </Paper>
  );
}
