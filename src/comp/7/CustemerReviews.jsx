import React from "react";
import { reviews } from "../../constants";
import ReviewsCard from "./ReviewsCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text mt-4 max-w-lg text-center m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo
        reprehenderit,
      </p>
      <div className="flex flex-col items-center justify-evenly items-center max-lg:flex-col  gap-14">
        {reviews.map((e) => {
          return <ReviewsCard key={e.customerName} {...e} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
