import React from "react";
import "./Reviews.css";

const reviews = [
  {
    logo: "monobuket.png",
    name: "MONOBUKET",
    text: "SWB превратили наш Instagram-магазин в полноценный сайт. Удобный интерфейс, онлайн-оплата, конструктор букетов. Продажи выросли на 40% за месяц! Спасибо большое за вашу помощь!))",
  },
  {
    logo: "candlesweq.png",
    name: "CANDLESWEQ",
    text: "Благодаря команде SWB мои свечи теперь продаются не только в инсте, но и на собственном сайте. Клиенты в восторге от функции персонализации заказа. Конверсия посетителей в покупателей как-будто увеличилось в 2 раза!",
  },
  {
    logo: "derzay.png",
    name: "DERZAY",
    text: "Безусловно, понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.",
  },
  {
    logo: "monobuket.png",
    name: "MONOBUKET",
    text: "SWB превратили наш Instagram-магазин в полноценный сайт. Удобный интерфейс, онлайн-оплата, конструктор букетов. Продажи выросли на 40% за месяц! Спасибо большое за вашу помощь!))",
  },
  {
    logo: "candlesweq.png",
    name: "CANDLESWEQ",
    text: "Благодаря команде SWB мои свечи теперь продаются не только в инсте, но и на собственном сайте. Клиенты в восторге от функции персонализации заказа. Конверсия посетителей в покупателей как-будто увеличилось в 2 раза!",
  },
  {
    logo: "derzay.png",
    name: "DERZAY",
    text: "Безусловно, понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.",
  },
];

const Reviews = () => {
  return (
    <>
    <h2 className="reviews-titleh2">Отзывы</h2>
    <div className="reviews-container">
      {/* Левая часть с отзывами */}
      <div className="reviews-box">
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="review-header">
                <img src={`/assets/images/${review.logo}`} alt={review.name} className="review-logo" />
                <h3 className="review-title">{review.name}</h3>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Правая часть с заголовком и фоном */}
      <div className="reviews-summary">
        <img src="/assets/images/aura.png" alt="Background" className="summary-bg" />
        <h2>ВСЕ НАШИ КЛИЕНТЫ ОТМЕЧАЮТ РОСТ ПРОДАЖ, ПОСЛЕ ЗАПУСКА ПРОЕКТОВ.</h2>
        <p>Мы не просто создаем сайты — мы создаем инструменты, которые работают на ваш бизнес.</p>
      </div>
    </div>
    </>
  );
};

export default Reviews;
