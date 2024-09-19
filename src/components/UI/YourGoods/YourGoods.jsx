import Good from "../Good/Good";
import fromSessionStorage from "../../../utils/fromSessionStorage";

import "./YourGoods.css";

const YourGoods = ({ total, setTotal }) => {
  const goods = fromSessionStorage();

  return (
    <div className="your-goods">
      <h2 className="yourGoods-title">Корзина</h2>
      <div className="your-goods">
        {goods.map((item, index) => (
          <Good key={index} total={total} setTotal={setTotal} item={item} />
        ))}
      </div>
    </div>
  );
};

export default YourGoods;
