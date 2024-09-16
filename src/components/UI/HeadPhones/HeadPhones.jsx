import "./HeadPhones.css";
import ProductCard from "../ProductCard/ProductCard";

const HeadPhones = ({ title, goods, inBasket, count }) => {
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
            count={count}
          />
        ))}
      </div>
    </section>
  );
};

export default HeadPhones;
