import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Categories from "../Categories/categories";
import { ReactComponent as CrwnLogo } from "../../assest/crown.svg";
import "./navigation.styles.scss";
import Footer from "../Footer/footer";

const NavBarMain = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  );
};

export default NavBarMain;
