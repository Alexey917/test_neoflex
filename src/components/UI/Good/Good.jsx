import del from "../../../images/sprite.svg#del";
import minus from "../../../images/sprite.svg#minus";
import plus from "../../../images/sprite.svg#plus";
import "./Good.css";
import { useState } from "react";
import useTotalSum from "../../../hooks/useTotalSum";

const Good = ({ total, item, sum, setSum }) => {
  const increase = () => {
    setSum(sum + 1);
  };

  const decrease = () => {
    setSum(sum - 1);
  };

  useTotalSum(sum);

  return (
    <div className="basket-wrapper">
      <div className="item-wrapper">
        <img className="basket-img" src={item.img} alt={item.title} />
        <div className="btn-price-group">
          <button
            className="btn-price"
            onClick={() => decrease()}
            disabled={sum <= 1 ? "True" : ""}
          >
            <svg className="minus-icon">
              <use href={minus + "#minus"}></use>
            </svg>
          </button>
          <span className="count-good">{sum}</span>
          <button className="btn-price" onClick={() => increase()}>
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
  );
};

export default Good;
