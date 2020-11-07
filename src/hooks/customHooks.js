import { useEffect, useState } from 'react';

import { getTopNews } from 'app/api/news';

export const useApi = (params) => {
  const [data, setData] = useState([]);

  const setParams = async (p) => {
    const responseData = await getTopNews(p);
    setData(responseData.articles);
  };
  useEffect(() => {
    setParams(params);
  }, [params]);

  return [data, setParams];
};

export const useDebounce = (callback, delay) => {
  const [time, setTime] = useState(null);

  const resetTime = (c, d) => {
    if (time) {
      clearTimeout(time);
    }
    setTime(setTimeout(c || callback, d || delay));
  };

  return [time, resetTime];
};
