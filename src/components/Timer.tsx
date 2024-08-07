import React, { useEffect, useState } from 'react';

interface TimerProps {
  startTime: boolean; 
}

const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startTime) {
      setSeconds(0); 
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } 
    return () => {
      if (interval) clearInterval(interval); 
    };
  }, [startTime]);

  return (
    <div className="text-xl font-semibold">
      Time: {seconds}s
    </div>
  );
};

export default Timer;
