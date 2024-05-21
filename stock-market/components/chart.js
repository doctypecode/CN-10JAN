import { chartAPI } from "../const.js";

const ctx = document.getElementById("stockChart");

function getChartData() {
  fetch(chartAPI)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

function renderChart() {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            183.9600067138672, 187, 186.67999267578125, 185.27000427246094,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

export function init() {
  getChartData();
  renderChart();
}
