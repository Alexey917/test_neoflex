import Good from "../Good/Good";

import "./YourGoods.css";

const YourGoods = () => {
  return (
    <div className="your-goods">
      <h2 className="yourGoods-title">Корзина</h2>
      <div className="your-goods">
        <Good />
      </div>
    </div>
  );
};

export default YourGoods;
