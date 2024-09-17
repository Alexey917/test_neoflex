import YourGoods from "../components/UI/YourGoods/YourGoods";
import TotalSum from "../components/UI/TotalSum/TotalSum";

const Basket = () => {
  return (
    <section className="basket container" style={{ display: "flex" }}>
      <YourGoods />
      <TotalSum />
    </section>
  );
};

export default Basket;
