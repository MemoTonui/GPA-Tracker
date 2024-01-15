import { useEffect } from "react";
import { Chart } from "chart.js";
function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Unit 1",
          "Unit 2",
          "Unit 3",
          "Unit 4",
          "Unit 5",
          "Unit 6",
          "Unit 7",
          "Unit 8",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 43],
            label: "Units Perfomance",
            borderColor: "rgb(62,149,205,0.4)",
            backgroundColor: "rgb(62,149,205,0.1)",
          },
        ],
      },
    });
  }, []);

  return (
    <>
      {/* Filled line chart */}
      <div className="bg-white ">
        <div className="pt-0 rounded-lg h-full w-full  shadow-sm">
          <canvas id="myChart" className="p-3"></canvas>
        </div>
      </div>
    </>
  );
}

export default LineChart;
