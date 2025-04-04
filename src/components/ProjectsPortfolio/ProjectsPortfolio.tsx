import React from "react";
import "./ProjectsPortfolio.css";

interface Project {
  title: string;
  description: string;
  image: string;
}

const ProjectsPortfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "EXCELLENT",
      description: "Ювелирный магазин в Телеграмме",
      image: "/assets/images/excellent-jewelry-mobile.png",
    },
    {
      title: "MONOBUKET",
      description: "Интернет-магазин цветов",
      image: "/assets/images/monobuket-laptop.png",
    },
    {
      title: "CANDLESWEQ",
      description: "Интернет-магазин свечей ручной работы",
      image: "/assets/images/candlesweq-laptop.png",
    },
    {
      title: "DERZAY",
      description: "Телеграм-бот для покупки дизайн курса",
      image: "/assets/images/derzay-mobile.png",
    },
  ];

  return (
    <>
      <h2 className="portfolio-titleh2">Портфолио</h2>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-box">
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
              <div
                className={`portfolio-image-container ${
                  project.image.includes("laptop") ? "laptop" : "phone"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="more-projects-box">
          <h3>ещё больше работ</h3>
        </div> */}
      </div>
    </>
  );
};

export default ProjectsPortfolio;
