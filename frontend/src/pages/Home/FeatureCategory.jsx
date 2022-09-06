import React from "react";
import bike from "../../assets/images/feature/bike-6.png";
import boot from "../../assets/images/feature/boot-shoe-1.png";
import gloves from "../../assets/images/feature/gloves-2.png";
import helmet from "../../assets/images/feature/helmet-6.png";
import jacket from "../../assets/images/feature/jacket-4.png";
import part from "../../assets/images/feature/part-1.png";
const FeatureCategory = () => {
  return (
    <div className="container py-24 lg:py-28 grid grid-cols-3 md:grid-cols-6 items-center gap-4 lg:gap-8">
      {category.map((cat) => (
        <div
          key={cat.id}
          className="rounded-xl cursor-pointer bg-btn hover:bg-btnHover hover:duration-500 hover:transition-all text-primary hover:text-white shadow-4xl p-4"
        >
          <img src={cat.image} alt="" />
          <h4 className="text-center font-medium text-base">{cat.title}</h4>
        </div>
      ))}
    </div>
  );
};
const category = [
  {
    id: 1,
    title: "Bike",
    image: bike,
  },
  {
    id: 2,
    title: "Boot",
    image: boot,
  },
  {
    id: 3,
    title: "Gloves",
    image: gloves,
  },
  {
    id: 4,
    title: "Helmet",
    image: helmet,
  },
  {
    id: 5,
    title: "Jacket",
    image: jacket,
  },
  {
    id: 6,
    title: "Parts",
    image: part,
  },
];
export default FeatureCategory;
