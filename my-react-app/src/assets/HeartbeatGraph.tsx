import React, { useEffect, useState } from 'react';

const HeartbeatGraph = () => {
  const [path, setPath] = useState('');
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the position of the lifeline
      const newX = x + 10;
      const newY = 100 + 50 * Math.sin(newX / 20); // Adjust the amplitude and period for the lifeline

      // Update the path to include the new line segment
      setPath(prevPath => `${prevPath} L${newX} ${newY}`);

      // Update the current position
      setX(newX);
    }, 100); // Adjust the interval to control the speed of the lifeline

    return () => clearInterval(interval);
  }, [x]);

  return (
    <div className='w-[100%] bg-red-500' >

    <svg width="500" height="200">
      <path d={`M0 100${path}`} fill="none" stroke="blue" strokeWidth="2" />
    </svg>
    </div>

  );
};

export default HeartbeatGraph;
