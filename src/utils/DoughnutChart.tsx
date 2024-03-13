import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: ["Bubbles", "Comments"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#0019FF", "#292D30"],
        borderColor: ["#0019FF", "#292D30"],
        hoverOffset: 4,
        rotation: 250,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="max-w-sm w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
