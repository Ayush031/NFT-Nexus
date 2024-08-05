import React, { useState } from "react";
import { CARDS, CATEGORIES } from "../../data";

const ToggleButtons = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState(buttons[0]?.label);

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className="flex items-center justify-center p-2 gap-2 rounded-xl bg-slate-800">
      {buttons.map((button) => (
        <button
          key={button.label}
          aria-label={button.label}
          onClick={() => handleButtonClick(button.label)}
          className={`rounded-lg p-2 ${
            activeButton === button.label
              ? "bg-info text-white"
              : "bg-transparent"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};
const CategoryHeader = () => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex gap-10">
      <span>Rank</span>
      <span>Collection</span>
    </div>
    <div className="flex gap-20 pr-4">
      <span>Floor Price</span>
      <span>Volume</span>
    </div>
  </div>
);
const CategoryItem = ({ rank, collection, floorPrice, volume }) => (
  <div className="flex items-center justify-between leading-none text-xl font-semibold mb-4">
    <div className="text-teal-200 flex gap-10">
      <span className="p-2 text-white">{rank}</span>
      <span className="p-2">{collection}</span>
    </div>
    <div className="flex gap-16 text-pink-200">
      <span className="p-2">{floorPrice}</span>
      <span className="p-2">{volume}</span>
    </div>
  </div>
);

function Marketplace() {
  return (
    <>
      <div className="flex justify-center gap-40 my-7">
        <ToggleButtons buttons={[{ label: "Trending" }, { label: "Top" }]} />
        <ToggleButtons
          buttons={[
            { label: "1h" },
            { label: "6h" },
            { label: "24h" },
            { label: "1d" },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-12">
        <div className="p-8 backdrop-filter backdrop-blur-lg rounded-lg border border-teal-500/80">
          <CategoryHeader />
          {CATEGORIES.slice(0, 5).map((item, i) => (
            <CategoryItem key={i} {...item} />
          ))}
        </div>
        <div className="p-8 backdrop-filter backdrop-blur-lg rounded-lg border border-teal-500/80">
          <CategoryHeader />
          {CATEGORIES.slice(5).map((item, i) => (
            <CategoryItem key={i} {...item} />
          ))}
        </div>
      </div>
      <hr className="my-4 bg-gray-600 w-full border-none h-1" />
      <div className="my-10 px-16">
        <p className="text-white text-5xl leading-none py-8">Top Collections</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="card w-full bg-base-100 shadow-xl border border-teal-500 p-5"
            >
              <figure>
                <img src={card.img} alt={card.title} className="rounded-xl" />
              </figure>
              <div className="card-body px-3 py-0 mt-5">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <p>{card.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
