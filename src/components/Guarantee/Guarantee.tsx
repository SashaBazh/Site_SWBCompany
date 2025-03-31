import React, { useState, useEffect } from "react";
import "./Guarantee.css";

const Guarantee: React.FC = () => {
  const [gifSrc, setGifSrc] = useState("./assets/gif/Union.gif");

  useEffect(() => {
    const updateGif = () => {
      if (window.innerWidth <= 431) {
        setGifSrc("./assets/gif/gif_mobile.gif");
      } else {
        setGifSrc("./assets/gif/gif_desktop.gif");
      }
    };

    updateGif();
    window.addEventListener("resize", updateGif);
    
    return () => window.removeEventListener("resize", updateGif);
  }, []);

  return (
    <div className="guarantee">
      <img src={gifSrc} alt="Foreground Animation" className="foreground-gif" />
      <div className="centered-text-block">
        <h1>Точные решения. Измеримый рост. Никаких компромиссов.</h1>
        <p>
          Каждый проект для нас — это возможность решить конкретную бизнес-задачу.
          Мы не просто пишем код, мы создаем инструменты, которые помогают вашему бизнесу расти.
        </p>
      </div>
    </div>
  );
};

export default Guarantee;
