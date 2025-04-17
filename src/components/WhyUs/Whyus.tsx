import React, { useState } from "react";
import "./Whyus.css";

const slides = [
  {
    text: (
      <>
        <span className="highlighted-text">Первый блок дизайна бесплатно.</span> <br />
        Мы сделаем первую часть дизайна без оплаты, чтобы вы могли оценить наш подход и убедиться в качестве работы.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="highlighted-text">Партнерский подход и креативность</span> <br />
        Погружаемся в специфику вашего бизнеса, предлагаем свежие идеи и эффективные решения для достижения реальных результатов.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="highlighted-text">Прозрачность и гибкость процесса</span> <br />
        Поддерживаем постоянную связь, согласовываем каждый этап разработки и оперативно реализуем все ваши пожелания.
      </>
    ),
  },
  {
    image: "/assets/images/crocodile2.png",
  },
];

const WhyUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="why-us">
      <h2>
        ПОЧЕМУ ИМЕННО <strong>МЫ?</strong>
      </h2>
      <div className="why-us-container">
        <img
          className="left-svg"
          src="/assets/Icons/left.svg"
          alt="Left Icon"
          onClick={prevSlide}
        />

        {currentSlide.image ? (
          <img src={currentSlide.image} alt="Slide" className="why-us-image" />
        ) : (
          <div className="why-us-text">{currentSlide.text}</div>
        )}

        <img
          className="right-svg"
          src="/assets/Icons/right.svg"
          alt="Right Icon"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default WhyUs;
