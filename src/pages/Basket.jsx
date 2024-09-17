import YourGoods from "../components/UI/YourGoods/YourGoods";
import TotalSum from "../components/UI/TotalSum/TotalSum";

const Basket = () => {
  return (
    <section
      className={
        sessionStorage.length <= 2
          ? "basket container full-screen"
          : "basket container"
      }
    >
      <YourGoods />
      <TotalSum />
    </section>
  );
};

export default Basket;
