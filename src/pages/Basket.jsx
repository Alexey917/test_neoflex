import YourGoods from "../components/UI/YourGoods/YourGoods";
import TotalSum from "../components/UI/TotalSum/TotalSum";
import { useEffect, useState } from "react";
import totalSum from "../utils/totalSum";

const Basket = () => {
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalSum);
  }, [total]);

  console.log(total);

  return (
    <section
      className={
        sessionStorage.length <= 2
          ? "basket container full-screen"
          : "basket container"
      }
    >
      <YourGoods total={total} setTotal={setTotal} />
      <TotalSum total={total} />
    </section>
  );
};

export default Basket;
