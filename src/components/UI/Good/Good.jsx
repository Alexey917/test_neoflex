import fromSessionStorage from "../../../utils/fromSessionStorage";

const Good = () => {
  const goods = fromSessionStorage();

  return (
    <>
      {goods.map((item, index) => {
        <div className="basket">
          <div>
            <img src="" alt="" />
            <div></div>
          </div>

          <div>
            <h3></h3>
            <p></p>
          </div>

          <div>
            {/* <svg className="basket-icon">
          <use href={basket + "#basket"}></use>
          </svg> */}
            <p></p>
          </div>
        </div>;
      })}
    </>
  );
};

export default Good;
