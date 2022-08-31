import * as React from "react";
import { NavLink } from "react-router-dom";

type TNavItem = {
  item: {
    name: string;
    url: string;
    [key: string]: any;
  };
};

const NavItem = ({ item }: TNavItem) => {
  return (
    <React.Fragment>
      <li>
        <NavLink
          to={item.url}
          className="px-3 font-semibold text-[#646969] hover:text-[#156565]"
        >
          {item.name}
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
