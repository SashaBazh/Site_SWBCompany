import React, { useState, useEffect } from 'react';
import './Advantages.css';

interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

const Advantages: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const advantages: AdvantageItem[] = [
    {
      number: "1",
      title: "Месяц бесплатной поддержки",
      description: "30 дней бесплатной поддержки и моментальных правок после релиза проекта."
    },
    {
      number: "2",
      title: "Выгодная оплата",
      description: "Предоплата всего 33%, окончательный расчет после завершения работ."
    },
    {
      number: "3",
      title: "Команда экспертов",
      description: "Эксперты с многолетним практическим опытом в различных областях деятельности."
    }
  ];

  return (
    <div className="advantages-container" id="advantages">
      <h2 className="advantages-title">Наши преимущества</h2>
      <div className="advantages-list">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-item">
            {isMobile ? (
              <div className="advantage-svg-wrapper">
                <svg className="advantage-bg" width="305" height="285" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M204 25C204 11.1929 192.807 0 179 0H25C11.1929 0 1.34776e-05 11.1929 1.24123e-05 25L7.47465e-06 89L0 260C-6.03528e-07 273.807 11.1929 285 25 285H280C293.807 285 305 273.807 305 260V114C305 100.193 293.807 89 280 89L229 89C215.193 89 204 77.8071 204 64V25Z" fill="white"/>
                </svg>
                <div className="advantage-number">{advantage.number}</div>
                <div className="advantage-content">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="advantage-number">{advantage.number}</div>
                <div className="advantage-content">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
