import React from "react";
import bike from "../../assets/images/feature/bike-6.png";
import boot from "../../assets/images/feature/boot-shoe-1.jpg";
import gloves from "../../assets/images/feature/gloves-2.jpg";
import helmet from "../../assets/images/feature/helmet-6.jpg";
import jacket from "../../assets/images/feature/jacket-4.jpg";
import part from "../../assets/images/feature/part-1.jpg";
const FeatureCategory = () => {
  return (
    <div className="container pb-24 lg:pb-28 flex items-center gap-5">
      {category.map((cat) => (
        <div key={cat.id} className="rounded-lg bg-btn">
          <img className="w-1/3 sm:w-auto" src={cat.image} alt="" />
          <h4 className="">{cat.title}</h4>
        </div>
      ))}
    </div>
  );
};
const category = [
  {
    id: 1,
    title: "Fastfood",
    image: bike,
  },
  {
    id: 2,
    title: "Pizza",
    image: boot,
  },
  {
    id: 3,
    title: "Asian Food",
    image: gloves,
  },
  {
    id: 4,
    title: "Raw Meat",
    image: helmet,
  },
  {
    id: 5,
    title: "Raw Meat",
    image: jacket,
  },
  {
    id: 6,
    title: "Raw Meat",
    image: part,
  },
];
export default FeatureCategory;
