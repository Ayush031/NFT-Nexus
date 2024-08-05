import React from "react";

function FeaturedProducts({ products }) {
  return (
    <>
      <div
        id="featuredProducts"
        className="scroll-smooth text-5xl text-center mb-8 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500"
      >
        Featured Products
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map((prd) => (
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={prd.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
