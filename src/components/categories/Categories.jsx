import React from "react";
import "./Categories.css";
import SectionTitle from "../sectionTitle/SectionTitle";
function Categories(props) {
  return (
    <div className="categories">
      <SectionTitle title={props.title} />
      <ul className="categories__list">
        {props.categories.map((category) => (
          <li key = {category.name} className = "category">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
