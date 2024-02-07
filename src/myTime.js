import CanvasJSReact from '@canvasjs/react-charts';
import React,{ useEffect } from 'react';
// var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//Create Chart
function MyTime() {
    useEffect(() => {
      // Create the chart options
      const options = {
        animationEnabled: true,
        title: {
          text: "My Time"
        },
        data: [{
          type: "doughnut",
          innerRadius: "40%",
          showInLegend: true,
          legendText: "{label}",
          indexLabel: "{label}: #percent%",
          dataPoints: [
            { label: "Sports", y: 10 },
            { label: "Social Media", y: 20 },
            { label: "Music", y: 10 },
            { label: "Games", y: 5 },
            { label: "Engineering", y: 55 }
          ]
        }]
      };
      
      // Render the chart
      const chart = new CanvasJS.Chart("chartContainer", options);
      chart.render();
  
      // Cleanup
      return () => {
        chart.destroy();
      };
    }, []);
  
    return (
      <div id="chartContainer" style={{ width: "100%", height: "400px" }}></div>
    );
  }
  
  export default MyTime;