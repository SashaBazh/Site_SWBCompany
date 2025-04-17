import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Через 3.5 секунды начинаем анимацию исчезновения
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <img src="/assets/images/aura.gif" alt="Loading..." />
    </div>
  );
};

export default Preloader;