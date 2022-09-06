import React from "react";
import bike from "../../assets/images/feature/bike-6.png";
import boot from "../../assets/images/feature/boot-shoe-1.png";
import gloves from "../../assets/images/feature/gloves-2.png";
import helmet from "../../assets/images/feature/helmet-6.png";
import jacket from "../../assets/images/feature/jacket-4.png";
import part from "../../assets/images/feature/part-1.png";
const FeatureCategory = () => {
  return (
    <div className="feturecategroy-container">
      {category.map((cat) => (
        <div key={cat.id} className="featurecategory-card">
          <img src={cat.image} alt="" />
          <h4 className="featurecategory-title">{cat.title}</h4>
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
