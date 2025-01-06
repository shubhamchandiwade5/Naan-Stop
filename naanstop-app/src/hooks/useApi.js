import { useEffect, useState } from 'react';

export const useApi = (url) => {
  let [data, setData] = useState(null);

  let fetchData = async () => {
    try {
      let response = await fetch(url);
      let allData = await response.json();
      setData(allData);
    } catch {
      console.log("some error occur");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};
