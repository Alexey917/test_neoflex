import "./ProductCard.css";

const ProductCard = ({ ...good }) => {
  return (
    <div className="card">
      <img className="card-img" src={good.img} alt="" />
      <div className="features">
        <h3 className="card-title">{good.title}</h3>
        <p className="card-title">{good.price}</p>
        <p className="card-title">{good.rate}</p>
        <button className="card-btn">Купить</button>
      </div>
    </div>
  );
};

export default ProductCard;
