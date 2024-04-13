import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PapularProduct from "./PapularProduct";
const PopularProducts = () => {
  const { products } = useSelector((state) => state.nike);

  return (
    <section className="max-container  max-sm:mt-12 " id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          papular <span className="text-coral-red">products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
          vitae commodi nemo, corrupti eaque nulla ab aperiam quas magnam beatae
          quod natus error voluptatum rem similique voluptas harum? Quaerat?
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-14">
        {products.map((e) => {
          console.log(e.imgURL);
          return (
            <PapularProduct
              key={e.name}
              imgUrl={e.imgURL}
              name={e.name}
              price={e.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
