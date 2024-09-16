import Good from "../Good/Good";

const YourGoods = () => {
  return (
    <div className="basket container">
      <h2 className="yourGoods-title">Корзина</h2>
      <div className="your-goods">
        <Good />
      </div>
    </div>
  );
};

export default YourGoods;
