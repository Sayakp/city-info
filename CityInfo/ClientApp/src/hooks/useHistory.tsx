import { useEffect, useState } from "react";
import axios from "axios";
import { CityQuery } from "../types";

const useHistory = () => {
  const [history, setHistory] = useState<CityQuery[]>([]);

  useEffect(() => {
    axios
      .get<CityQuery[]>("/api/queries")
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { history };
};

export default useHistory;
