import React from "react";
import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  items: string[];
  price: string;
  days: string;
  backgroundImage?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    items,
    price,
    days,
  }) => {
    const priceMatch = price.match(/(ОТ)\s*(\d+\$)/);
    const pricePrefix = priceMatch ? priceMatch[1] : "";
    const priceValue = priceMatch ? priceMatch[2] : price;
  
    const daysMatch = days.match(/(\d+-\d+)\s*(дней)/);
    const daysRange = daysMatch ? daysMatch[1] : days;
    const daysText = daysMatch ? daysMatch[2] : "";
  
    return (
      <div className="service-card">
        <div className="service-card-content">
          <h3 className="service-card-title">{title}</h3>
          <ul className="service-card-list">
            {items.map((item, index) => (
              <li key={index}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="service-list-icon"
                >
                  <circle cx="5" cy="5" r="5" fill="#1D4594" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="service-card-price-container">
            <span className="service-card-price">
              <span className="price-prefix">{pricePrefix}</span>
              <span className="price-value">{priceValue}</span>
            </span>
            <span className="service-card-time">
              <span className="days-range">{daysRange}</span>
              <span className="days-text">{daysText}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  