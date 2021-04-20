import * as React from "react";
import { Nav, NavItem } from "react-bootstrap";
import tempProfile from "../../assets/img/faces/face-0.jpg";
import { power } from "../../variables/icons";

import { logout } from "../../Utils/auth";

const AdminNavbarLinks: React.FC = () => {
  return (
    <Nav>
      <NavItem>
        <img src={tempProfile} alt="profile" className="nav-profile-img" />{" "}
        <br />
        <span className="nav-id-name">ID name</span>
      </NavItem>

      <NavItem>
        <img
          src={power}
          alt="power logout"
          className="nav-img-power"
          onClick={() => logout()}
        />
      </NavItem>
    </Nav>
  );
};

export default AdminNavbarLinks;
