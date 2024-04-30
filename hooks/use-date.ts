import { useState, useEffect } from 'react';

interface DateInfo {
  year: string;
  wish: string;
}

const useDate = (): DateInfo => {
  const [today, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const year: string = `${today.getFullYear()}`;

  const hour: number = today.getHours();
  const wish: string = `Good ${
    (hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Ebening'
  } `;

  return {
    year,
    wish,
  };
};

export default useDate;
