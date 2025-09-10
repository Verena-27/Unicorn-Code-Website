import "../App.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(false);

  return (
    <>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </div>

      <div className={`Sidebar ${isOpen ? "open" : ""}`}>
        <ul className="SidebarList">
          {SideBarData.map((val, key) => (
            <li key={key} className="row" onClick={handleClick}>
              <NavLink to={val.link}>{val.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
