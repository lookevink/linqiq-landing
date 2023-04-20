import { Chart, LinearScale, BarElement, CategoryScale } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement);
import { Bar } from "react-chartjs-2";

var data = {
  labels: [
    "Venture REI",
    "Cash",
    "US RE Price",
    "AZ RE Price",
    "US Bonds",
    "US Stocks",
    "REITs",
  ],
  datasets: [
    {
      Label: "asset classes prices",
      data: [22, 2.2, 1.4, -3.6, -13.25, -19.6, -26.3],
      barThickness: 45,
      backgroundColor: (context: { chart: any }) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        const { top, bottom } = chartArea;
        const gradient = ctx.createLinearGradient(0, top, 0, bottom);
        gradient.addColorStop(0, "#6EF7FF");
        gradient.addColorStop(0.5, "#26C0FF25");
        gradient.addColorStop(1, "#6EF7FF");
        return gradient;
      },
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const BarChart = () => {
  return <Bar data={data} options={options} />;
};
