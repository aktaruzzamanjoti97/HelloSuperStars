import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import { Line } from "react-chartjs-2";



const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#7E1D9C",
      borderColor: "#FEF40B"
    },
   
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};


const ChartCompo = () => {


    return (
        <div className="bg-dark">
                  <Line data={data} legend={legend} options={options} />
        </div>
    );
};

export default ChartCompo;