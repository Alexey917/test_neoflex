import "./TotalSum.css";

const TotalSum = ({ total }) => {
  console.log(total);
  return (
    <div className="total-sum">
      <div className="total-wrapper">
        <p className="total-text">ИТОГО</p>
        <p className="total-text">{total} &#8381;</p>
      </div>
      <button className="btn-total">
        <span className="total-text total-color">Перейти к оформлению</span>
      </button>
    </div>
  );
};

export default TotalSum;
