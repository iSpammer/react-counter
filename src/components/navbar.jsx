import React from "react";

const NavBar = ({totalCounters}) => {
    console.log("navbar rendered")

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://www.google.com" className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};



export default NavBar;
