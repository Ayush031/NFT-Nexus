import React from "react";
import { NavLink } from "react-router-dom";

export const LinkBtn = (props) => {
  return (
    <NavLink
      to={`/${props.index === 0 ? "" : props.link.toLowerCase()}`}
      className={({ isActive }) =>
        `btn btn-info ${
          isActive ? "bg-info" : "hover:bg-transparent bg-transparent text-info"
        }`
      }
    >
      {props.link}
    </NavLink>
  );
};


