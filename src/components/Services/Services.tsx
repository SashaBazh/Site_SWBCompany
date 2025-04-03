import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

// Определение интерфейса для услуги
export interface Service {
  title: string;
  items: string[];
  price: string;
  days: string;
}

const Services: React.FC = () => {
  // Массив услуг
  const services: Service[] = [
    {
      title: "САЙТ-ВИЗИТКА",
      items: [
        "До 5 страниц",
        "Разработка технического задания",
        "Уникальный адаптивный дизайн",
        "Наполнение контентом",
        "Интеграция онлайн-консультанта",
        "Базовая SEO-оптимизация",
        "Установка систем аналитики",
      ],
      price: "ОТ 250$",
      days: "1-7 дней",
    },
    {
      title: "ЛЕНДИНГ",
      items: [
        "До 10 информационных блоков",
        "Уникальный адаптивный дизайн",
        "Копирайтинг и наполнение контентом",
        "Интеграция онлайн-консультанта",
        "Настройка форм обратной связи",
        "A/B тестирование для максимальной конверсии",
      ],
      price: "ОТ 450$",
      days: "7-14 дней",
    },
    {
      title: "ИНТЕРНЕТ-МАГАЗИН",
      items: [
        "Парсинг данных",
        "Автоматизация рутинных задач",
        "Интеграция между сервисами",
        "Создание чат-ботов",
        "Автоматизация отчетности",
        "Обработка и анализ больших объемов данных",
      ],
      price: "ОТ 1000$",
      days: "10-30 дней",
    },
    {
      title: "САЙТ-ВИЗИТКА",
      items: [
        "До 5 страниц",
        "Разработка технического задания",
        "Уникальный адаптивный дизайн",
        "Наполнение контентом",
        "Интеграция онлайн-консультанта",
        "Базовая SEO-оптимизация",
        "Установка систем аналитики",
      ],
      price: "ОТ 250$",
      days: "1-7 дней",
    },
    {
      title: "ЛЕНДИНГ",
      items: [
        "До 10 информационных блоков",
        "Уникальный адаптивный дизайн",
        "Копирайтинг и наполнение контентом",
        "Интеграция онлайн-консультанта",
        "Настройка форм обратной связи",
        "A/B тестирование для максимальной конверсии",
      ],
      price: "ОТ 450$",
      days: "7-14 дней",
    },
    {
      title: "ИНТЕРНЕТ-МАГАЗИН",
      items: [
        "Парсинг данных",
        "Автоматизация рутинных задач",
        "Интеграция между сервисами",
        "Создание чат-ботов",
        "Автоматизация отчетности",
        "Обработка и анализ больших объемов данных",
      ],
      price: "ОТ 1000$",
      days: "10-30 дней",
    },
  ];

  // Разделяем массив на две части по 3 карточки
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3, 6);

  return (
    <div className="services-container">
      <h2 className="services-title">Услуги</h2>
      <div className="services-rows">
        <div className="services-scroll">
          {firstRow.map((service, index) => (
            <ServiceCard 
              key={`row1-${index}`} 
              title={service.title}
              items={service.items}
              price={service.price}
              days={service.days}
            />
          ))}
        </div>
        <div className="services-scroll">
          {secondRow.map((service, index) => (
            <ServiceCard 
              key={`row2-${index}`} 
              title={service.title}
              items={service.items}
              price={service.price}
              days={service.days}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;