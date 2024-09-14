import "./HeadPhones.css";
import ProductCard from "../ProductCard/ProductCard";

const HeadPhones = ({ title, goods }) => {
  return (
    <section className="section container">
      <h2 className="section-title">{title}</h2>
      <div className="card-wrapper">
        {goods.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default HeadPhones;
