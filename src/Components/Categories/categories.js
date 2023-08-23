import React, { Fragment } from "react";
import CategoriesData from "../Constents/Constent";
import "./categories.style.scss";
import { Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <Fragment>
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
      <Outlet />
    </Fragment>
  );
};

export default Categories;
