import "./HeadPhones.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

const HeadPhones = ({ title, goods, inBasket }) => {
  return (
    <section className="section container">
      <h2 className="section-title">{title}</h2>
      <div className="card-wrapper">
        {goods.map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            oldPriceTrue={title}
            inBasket={inBasket}
          />
        ))}
      </div>
    </section>
  );
};

export default HeadPhones;
