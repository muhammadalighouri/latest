import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 5, 5, 55, 10, 15],
      backgroundColor: ["#57a4ff", "#009688", "#005ece", "#223fa8", '#001146', "#15216d"],
      borderColor: '#00bcd4a1',
      borderWidth: 0,
      // weight: '120px',
      // offset: 20,
      // circumference: 0,
      cutout: 120,

    },

  ],
};

function Chart({ clasS }) {
  return <Doughnut className={clasS} data={data} />;
}
export default Chart;
