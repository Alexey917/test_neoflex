import YourGoods from "../components/UI/YourGoods/YourGoods";
import TotalSum from "../components/UI/TotalSum/TotalSum";
import { useState } from "react";
// import totalSum from "../utils/totalSum";
import useTotalSum from "../hooks/useTotalSum";

const Basket = () => {
  const [sum, setSum] = useState(1);
  let total = useTotalSum(sum);

  return (
    <section
      className={
        sessionStorage.length <= 2
          ? "basket container full-screen"
          : "basket container"
      }
    >
      <YourGoods total={total} sum={sum} setSum={setSum} />
      <TotalSum total={total} />
    </section>
  );
};

export default Basket;
