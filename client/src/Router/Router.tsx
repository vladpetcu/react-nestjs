import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "../views/Home/Home";
import { Users } from "../views/Users/Users";
import { Cats } from "../views/Cats/Cats";
import { Layout } from "./Layout/Layout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.users} element={<Users />} />
        <Route path={routes.cats} element={<Cats />} />
      </Route>
      <Route path={"*"} element={<Layout />} />
    </Routes>
  </BrowserRouter>
);
