import Good from "../Good/Good";
import fromSessionStorage from "../../../utils/fromSessionStorage";

import "./YourGoods.css";

const YourGoods = ({ total, sum, setSum }) => {
  const goods = fromSessionStorage();

  return (
    <div className="your-goods">
      <h2 className="yourGoods-title">Корзина</h2>
      <div className="your-goods">
        {goods.map((item, index) => (
          <Good
            key={index}
            total={total}
            item={item}
            sum={sum}
            setSum={setSum}
          />
        ))}
      </div>
    </div>
  );
};

export default YourGoods;
