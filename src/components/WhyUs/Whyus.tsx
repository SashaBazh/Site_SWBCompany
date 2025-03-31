import React from "react";
import "./Whyus.css";

const WhyUs: React.FC = () => {
  return (
    <div className="why-us">
      <h2>
        ПОЧЕМУ ИМЕННО <strong>МЫ?</strong>
      </h2>
      <div className="why-us-container">
        <img className="left-svg" src="/assets/Icons/left.svg" alt="Left Icon" />
        <div className="why-us-text">
          <span className="highlighted-text">Первый блок дизайна бесплатно.</span> <br />
          Мы сделаем первую часть дизайна без оплаты, <br />
          чтобы продемонстрировать качество работы.
        </div>
        <img className="right-svg" src="/assets/Icons/right.svg" alt="Right Icon" />
      </div>
    </div>
  );
};

export default WhyUs;
