import React from "react";
import { NavLink } from "react-router-dom";
import headerRoutes from "../routes/headerRoutes";

const Navigation = () => {
  return (
    <div>
      <ul className="NavLinkList">
        {headerRoutes.map(({ path, exact, name }) => (
          <li className="NavLinkListItem" key={path}>
            <NavLink
              className="NavLink"
              activeClassName="NavLink--active"
              to={path}
              exact={exact}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
