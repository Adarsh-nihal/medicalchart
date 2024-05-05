// App.tsx
import React, { useEffect } from 'react';
import './App.css';
import initSciChart from './Chart';
import HeartbeatGraph from './assets/HeartbeatGraph';

function App() {
  useEffect(() => {
    const initializeChart = async () => {
      try {
        const sciChartSurface = await initSciChart();
        // Optionally, you can store sciChartSurface in state if needed
      } catch (error) {
        console.error("Error initializing SciChart:", error);
      }
    };
    
    initializeChart();

    return () => {
      // Cleanup function
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SciChart.js with React hello world!</h1>
        <p>
          In this example we setup webpack, scichart, react and create a simple
          chart with one X and Y axis
        </p>
      </header>
      <HeartbeatGraph/>
      <div id="scichart-root" style={{ maxWidth: 900, height: "500px" }}></div>
    </div>
  );
}

export default App;
