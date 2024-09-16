import { useOutletContext } from "react-router-dom";
import HeadPhones from "../components/UI/HeadPhones/HeadPhones";
import { headphones, wirelessHeadphones } from "../data/headphones";
import { useState } from "react";

const Main = () => {
  const [products] = useState([
    { title: "Наушники", goods: headphones },
    { title: undefined, goods: headphones },
    { title: "Беспроводные наушники", goods: wirelessHeadphones },
  ]);

  const [count, setCount] = useOutletContext();

  const inBasket = (good) => {
    setCount(count + 1);
    sessionStorage.setItem(count, JSON.stringify(good));
    console.log(count);
  };

  return (
    <>
      {products.map((item, index) => (
        <HeadPhones
          key={index}
          title={item.title}
          goods={item.goods}
          inBasket={inBasket}
          count={count}
        />
      ))}
    </>
  );
};

export default Main;
