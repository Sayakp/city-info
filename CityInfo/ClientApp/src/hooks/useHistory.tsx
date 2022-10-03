import { useEffect, useState } from "react";
import axios from "axios";
import { ICityQuery } from "../types";

const useHistory = () => {
  const [history, setHistory] = useState<ICityQuery[]>([]);

  useEffect(() => {
    axios
      .get<ICityQuery[]>("/api/queries")
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
