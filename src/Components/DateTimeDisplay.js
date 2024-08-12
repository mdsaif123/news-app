import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Format date (e.g., "8/12/2024")
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Format time (e.g., "3:45:30 PM")
  };

  return (
    <div className=''>
      
      <p>{formatTime(dateTime)}</p>
      {/* <p>{formatDate(dateTime)}</p> */}
    </div>
  );
};

export default DateTimeDisplay;
