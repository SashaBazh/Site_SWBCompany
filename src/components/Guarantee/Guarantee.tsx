import React, { useState, useEffect } from "react";
import "./Guarantee.css";
import gifDesktop from "../../../public/assets/gif/gif_desktop.gif";
import gifMobile from "../../../public/assets/gif/gif_mobile.gif";


const Guarantee: React.FC = () => {
  const [gifSrc, setGifSrc] = useState("./assets/gif/Union.gif");

  useEffect(() => {
    const updateGif = () => {
      setGifSrc(window.innerWidth <= 431 ? gifMobile : gifDesktop);

    };

    updateGif();
    window.addEventListener("resize", updateGif);
    
    return () => window.removeEventListener("resize", updateGif);
  }, []);

  return (
    <section id="about" className="guarantee">
      <img src={gifSrc} alt="Foreground Animation" className="foreground-gif" />
      <div className="centered-text-block">
        <h1>Точные решения. Измеримый рост. Никаких компромиссов.</h1>
        <p>
          Каждый проект для нас — это возможность решить конкретную бизнес-задачу.
          Мы не просто пишем код, мы создаем инструменты, которые помогают вашему бизнесу расти.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
