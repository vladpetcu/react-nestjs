import React from "react";

import { Outlet, Link } from "react-router-dom";
import { routes } from "../routes";

export const Layout = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.users}>Users</Link>
        </li>
        <li>
          <Link to={routes.cats}>Cats</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);
