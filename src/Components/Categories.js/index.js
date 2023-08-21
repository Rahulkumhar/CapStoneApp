import React, { useState, useEffect } from "react";
import CategoriesData from "../Constents/Constent";
import "../../Scss/categories.style.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      {CategoriesData.map(({ title, id, imgUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
