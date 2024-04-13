import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const { services } = useSelector((state) => state.nike);
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((e) => {
        return <ServicesCard key={e.label} {...e} />;
      })}
    </section>
  );
};

export default Services;
