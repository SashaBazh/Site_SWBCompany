import Guarantee from "../components/Guarantee/Guarantee";
import Header from "../components/Header/Header";
import WhyUs from "../components/WhyUs/Whyus";
import Advantages from "../components/Advantages/Advantages";
import Services from "../components/Services/Services";
import ProjectsPortfolio from "../components/ProjectsPortfolio/ProjectsPortfolio";
import Reviews from "../components/Reviews/Reviews";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader/Preloader";

export const SwbLending = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Установка фиксированного времени отображения прелоадера
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 секунды

    // Заранее импортируем и кешируем все изображения
    // Это будет происходить параллельно с показом прелоадера
    preloadAllImages();

    return () => clearTimeout(timer);
  }, []);

  // Функция для предзагрузки всех изображений на странице
  const preloadAllImages = () => {
    // Получаем все изображения текущей страницы после монтирования компонентов
    setTimeout(() => {
      const images = document.querySelectorAll('img');
      
      // Создаем временные объекты Image для каждого найденного src
      images.forEach(img => {
        if (img.src) {
          const tempImg = new Image();
          tempImg.src = img.src;
        }
      });
    }, 100); // Небольшая задержка, чтобы компоненты успели отрендериться в DOM
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Guarantee />
          <WhyUs />
          <Advantages />
          <Services />
          <ProjectsPortfolio />
          <Reviews />
          <Contacts />
          <Footer />
        </>
      )}
    </>
  );
};