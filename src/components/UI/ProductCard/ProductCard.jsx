import "./ProductCard.css";
import star from "../../../images/sprite.svg#star";

const ProductCard = ({ oldPriceTrue, inBasket, count, ...good }) => {
  return (
    <div className="card">
      <img className="card-img" src={good.img} alt="" />
      <div className="features">
        <h3 className="card-title">{good.title}</h3>

        <div className="rate-wrapper">
          <svg className="star-icon">
            <use href={star + "#star"}></use>
          </svg>
          <span className="card-title card-rate">{good.rate}</span>
        </div>

        <div
          className={
            good.OldPrice && oldPriceTrue !== undefined
              ? "price-group"
              : "without-old"
          }
        >
          <p className="card-title card-price">{good.price} &#8381;</p>
          {good.OldPrice && oldPriceTrue !== undefined ? (
            <p className="card-title old-price">{good.OldPrice} &#8381;</p>
          ) : (
            ""
          )}
        </div>

        <button className="card-btn" onClick={() => inBasket(good)}>
          <span className="card-title">Купить</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
