import fromSessionStorage from "../../../utils/fromSessionStorage";
import del from "../../../images/sprite.svg#del";
import minus from "../../../images/sprite.svg#minus";
import plus from "../../../images/sprite.svg#plus";
import "./Good.css";

const Good = () => {
  const goods = fromSessionStorage();
  console.log(goods);

  return (
    <>
      {goods.map((item, index) => (
        <div key={index} className="basket-wrapper">
          <div className="item-wrapper">
            <img className="basket-img" src={item.img} alt={item.title} />
            <div className="btn-price-group">
              <button className="btn-price">
                <svg className="minus-icon">
                  <use href={minus + "#minus"}></use>
                </svg>
              </button>
              <span className="count-good">?</span>
              <button className="btn-price">
                <svg className="plus-icon">
                  <use href={plus + "#plus"}></use>
                </svg>
              </button>
            </div>
          </div>

          <div className="item-info">
            <h3 className="info-title">{item.title}</h3>
            <p className="info-price">{item.price} &#8381;</p>
          </div>

          <div className="item-wrapper">
            <button className="btn-del">
              <svg className="del-icon">
                <use href={del + "#del"}></use>
              </svg>
            </button>
            <p className="basket-good-price">{item.price} &#8381;</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Good;


