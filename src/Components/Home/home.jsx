import React from "react";
import NavBarMain from "../NavBarMain/navBarMain";
import { Outlet } from "react-router-dom";
import Categories from "../Categories/categories";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <>
      <NavBarMain />
      <Outlet />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
