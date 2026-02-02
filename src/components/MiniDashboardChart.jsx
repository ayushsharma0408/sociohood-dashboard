import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";


// Register plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);


export default function MiniDashboardChart({ stats }) {

  const data = {
    labels: [
      "Assigned",
      "Closed",
      "Cancel",
      "Unassigned",
      "Resolved",
      "Reopened",
    ],

    datasets: [
      {
        data: [
          stats.assigned,
          stats.closed,
          stats.cancel,
          stats.unassigned,
          stats.resolved,
          stats.reopened,
        ],

        backgroundColor: "#2563eb",
        borderRadius: 8,
        barThickness: 55,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,


    plugins: {
      legend: {
        display: false,
      },

      //  value on top of bars
      datalabels: {
        anchor: "end",
        align: "end",
        color: "#1f2937",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => value,
      },
    },


    scales: {
      x: {
        grid: {
          display: false, // remove vertical grid
        },

        ticks: {
          color: "#4b5563",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          display: false, // remove horizontal grid
        },

        ticks: {
          display: true, // SHOW Y-AXIS
          color: "#4b5563",
          font: {
            size: 12,
            weight: "500",
          },
          stepSize: 500, 
        },
      },
    },
  };


  return (
    <div className="bg-white rounded-xl shadow p-6 h-[350px] w-full">

      <Bar data={data} options={options} />

    </div>
  );
}
