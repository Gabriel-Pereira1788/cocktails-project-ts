import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import Home from "../pages/Home";
import SingleDrink from "../pages/SingleDrink";
type Props = {};

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="drink/:drinkId" element={<SingleDrink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
