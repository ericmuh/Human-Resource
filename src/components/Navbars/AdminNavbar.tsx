import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import AdminNavbarLinks from "./AdminNavbarLinks";

const Header: React.FC = (props: any) => {
  const [sidebarExists, setSidebarExists] = useState(false);
  const mobileSidebarToggle = (e: any) => {
    if (sidebarExists === false) {
      setSidebarExists(true);
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    let node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  return (
    <Navbar id="navbar">
      <Navbar.Brand>
        <a href="#pablo">{props.brandText}</a>
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <AdminNavbarLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
