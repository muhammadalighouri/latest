import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 5, 5, 80],
      backgroundColor: ["#57a4ff", "#009688", "#005ece", "#eee"],

      borderWidth: 0,
    },
  ],
};

function Chart({ clasS }) {
  return <Doughnut className={clasS} data={data} />;
}
export default Chart;
