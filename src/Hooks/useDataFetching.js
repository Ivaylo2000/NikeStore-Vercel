import { useEffect, useState } from "react";

const useDataFetching = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      try {
        const fetchedData = await response.json();
        const dataArray = Object.values(fetchedData);
        setData(dataArray);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useDataFetching;
