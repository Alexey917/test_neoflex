import "./TotalSum.css";

const TotalSum = () => {
  return (
    <div className="total-sum">
      <div className="total-wrapper">
        <p className="total-text">ИТОГО</p>
        <p className="total-text">?</p>
      </div>
      <button className="btn-total">
        <span className="total-text total-color">Перейти к оформлению</span>
      </button>
    </div>
  );
};

export default TotalSum;
