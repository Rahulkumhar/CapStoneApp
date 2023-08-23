import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Categories from "../Categories/categories";
import { ReactComponent as CrwnLogo } from "../../assest/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
      <Categories />
    </Fragment>
  );
};

export default Navigation;
