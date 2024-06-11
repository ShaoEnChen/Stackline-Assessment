import { Sale } from "@/app/lib/definitions";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function SalesGraph({ sales }: {
  sales: Sale[];
}) {
  const labels = sales.map(sale => sale.weekEnding);
  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Retail Sales",
        data: sales.map(sale => sale.retailSales),
        borderColor: "#40a6f5",
        tension: 0.4
      },
      {
        label: "Wholesale Sales",
        data: sales.map(sale => sale.wholesaleSales),
        borderColor: "#9ba5be",
        tension: 0.4
      }
    ]
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: -1000000,
        max: 2500000,
        border: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
  };

  return (
    <div className="w-full mb-24 p-6 bg-white" aria-label="Sales Graph">
      <h2 className="text-slate-600">Retail Sales</h2>
      <Line className="border-none" data={lineChartData} options={options} />
      <hr></hr>
      <div className="flex flex-row justify-around p-4 text-center text-slate-400 text-sm">
        <span>JAN</span>
        <span>FEB</span>
        <span>MAR</span>
        <span>APR</span>
        <span>MAY</span>
        <span>JUN</span>
        <span>JUL</span>
        <span>AUG</span>
        <span>SEP</span>
        <span>OCT</span>
        <span>NOV</span>
        <span>DEC</span>
      </div>
    </div>
  );
}