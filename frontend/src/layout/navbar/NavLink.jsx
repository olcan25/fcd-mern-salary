import { useEffect, useState } from "react";


const NavLink = props => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {props.name}
      </a>
    </li>
  );
};


export default NavLink;