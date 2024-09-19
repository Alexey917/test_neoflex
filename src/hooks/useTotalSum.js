import { useEffect, useState } from "react";
import totalSum from "../utils/totalSum";

const useTotalSum = (sum = 1) => {
  let [total, setTotal] = useState(0);

  let sumFunc = totalSum();

  useEffect(() => {
    setTotal(sum * sumFunc);
  }, [total, sum, sumFunc]);

  return total;
};

export default useTotalSum;
