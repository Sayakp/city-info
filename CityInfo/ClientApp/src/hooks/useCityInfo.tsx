import { useEffect, useState } from "react";
import axios from "axios";
import { ICityInfo } from "../types";

const UseCityInfo = (cityName: string) => {
  const [results, setResults] = useState<ICityInfo | null>(null);
  useEffect(() => {
    axios
      .get<ICityInfo>(`/api/cities/${cityName}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityName]);

  return { results };
};

export default UseCityInfo;
