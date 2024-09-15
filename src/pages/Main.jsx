import HeadPhones from "../components/UI/HeadPhones/HeadPhones";
import { headphones, wirelessHeadphones } from "../data/headphones";
import { useState } from "react";

const Main = () => {
  const [products] = useState([
    { title: "Наушники", goods: headphones },
    { title: undefined, goods: headphones },
    { title: "Беспроводные наушники", goods: wirelessHeadphones },
  ]);

  return (
    <>
      {products.map((item, index) => (
        <HeadPhones key={index} title={item.title} goods={item.goods} />
      ))}
    </>
  );
};

export default Main;
