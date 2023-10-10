import { useEffect, useState } from "react";

const useDataFetching = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response problem");
        }

        const fetchedData = await response.json();
        const dataArray = Object.values(fetchedData);
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: " + error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useDataFetching;
