import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../context";

const Services = () => {
  const context = useContext(ProjectContext);
  const { services } = context;
  return (
    <section id="service-section" className="services">
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span className={item.iconColor}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
