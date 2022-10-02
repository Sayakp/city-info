import React, { useEffect, useState } from "react";
import axios from "axios";

const useHistory = () => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    axios
      .get("/api/queries")
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setHistory(response.data);
      })
      .catch((error) => {
        setHistory(null);
        console.log(error);
      });
  }, []);

  return { history };
};

export default useHistory;
