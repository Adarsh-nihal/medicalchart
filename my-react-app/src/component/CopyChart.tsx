import  { useEffect } from 'react';
import * as echarts from 'echarts';

const CopyChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('chart');
    const chart = echarts.init(chartDom);

    const sampleECGData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));
    

    function generateECGData() {
      const data = [];
      let x = 0;
      while (data.length < 100) {
        for (const y of sampleECGData) {
          data.push([x, y]);
          x++;
          if (data.length >= 100) {
            break;
          }
        }
      }
      return data;
    }

    let data = generateECGData();

    function simulateECG(index:any) {
      const newIndex = (index + 6) % 100;
      const range = newIndex > index ? data.slice(index + 1, newIndex) : [...data.slice(index + 1), ...data.slice(0, newIndex)];
      for (const i of range as [number, number][]) {
        i[1] = NaN;
    }
      data[index][1] = data[newIndex][1];
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      simulateECG(currentIndex);
      currentIndex++;
      if (currentIndex >= 100) currentIndex = 0;
      updateChart();
    }, 200);

    function updateChart () {
      const option:any = {
        grid: {
          left: '30px',
          right: '30px',
          top: '10px',
          bottom: '10px'
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params:any) => {
            return 'X: ' + params[0].value[0] + '<br/>Y: ' + params[0].value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          smooth: true,
          data: data
        }]
      };
    
      chart.setOption(option);
    }

    updateChart();

    return () => clearInterval(interval);
  }, []);

  return <div id="chart" style={{ width: '1200px', height: '200px' }}></div>;
};

export default CopyChart;
