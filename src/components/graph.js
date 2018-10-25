import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class Graph extends Component {
  render() {
    const data = (canvas) => {
      canvas.style.backgroundColor = 'rgba(0, 0, 0, 0)';

      let dataset = this.props.data.map((_data, index) => ({
          ...DATASET_CONFIG,
          borderColor: COLORS[index],
          label: (this.props.selected === "all keywords")
                    ? this.props.keywords[index + 1] 
                    : this.props.selected,
          data: _data
        }))
    

      return {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturaday', 'Sunday'],
        datasets: dataset
      }
    };

    return (
      <div className='graph__container--graph'>
        <Line data={data} options={OPTIONS} redraw/>
      </div>
    )
  }
}

const COLORS = [
  'rgba(255, 104, 0, 1)',
  'rgba(1, 181, 183, 1)',
  'rgba(124, 208, 34, 1)',
  'rgba(116, 164, 62, 1)',
  'rgba(34, 116, 164, 1)',
]

const OPTIONS = {
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 10,
      fontColor: '#efefef'
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(94, 94, 94, 1)',
        drawTicks: false
      },
      ticks: {
        fontColor: '#efefef',
        padding: 15,
        maxRotation: 0
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(94, 94, 94, 1)',
        drawTicks: false
        // offsetGridLines:true
      },
      ticks: {
        fontColor: '#efefef',
        stepSize: 2,
        padding: 10,
        autoSkipPadding: 10
      },
    }]
  },
  responsive: true,
  maintainAspectRatio: false,
}

const DATASET_CONFIG = {
  fill: true,
  lineTension: 0.5,
  backgroundColor: 'rgba(0,0,0,0)',
  borderWidth: 3.4,
  pointBorderColor: 'rgba(255,255,255,1)',
  pointBackgroundColor: 'rgb(39,39,39)',
  pointBorderWidth: 2,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(39,39, 39,1)',
  pointHoverBorderColor: 'rgba(99, 99, 99, 1)',
  pointHoverBorderWidth: 2,
  pointRadius: 5,
}

export default Graph
