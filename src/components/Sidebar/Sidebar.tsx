import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks"; 

import logo from "../../assets/img/logo.png";

const Sidebar: React.FC = (props: any) => {
  return (
    <div id="sidebar" className="sidebar">
      <div className="logo">
        <Link to="/" className="nav-brand">
          <div className="logo-img">
            <img src={logo} alt="logo_image" />
          </div>
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {props.routes.map((prop: any, key: any) => {
            if (prop.layout === "/admin" && !prop.parent)
              return (
                <React.Fragment key={key}>
                  {prop.children ? (
                    <Accordion key={key} as="li">
                      <Accordion.Toggle
                        eventKey="0"
                        as="a"
                        className="nav-link ">
                        <p className="row">
                          <img
                            src={prop.icon}
                            alt={`${prop.icon}`}
                            className="sidebar-icon"
                          />
                          <span>{prop.name} </span>
                        </p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <ul>
                          {prop.children.map((child: any, key: any) => (
                            <li key={key} className="sub-link">
                              <NavLink
                                to={prop.path + child.path}
                                className="nav-link "
                                activeClassName="active">
                                <p className="row">
                                  ►<span>{child.name}</span>
                                </p>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Collapse>
                    </Accordion>
                  ) : (
                    <li key={key}>
                      <NavLink
                        to={prop.path}
                        className="nav-link"
                        activeClassName="active">
                        <p className="row">
                          {" "}
                          <img
                            src={prop.icon}
                            alt={`${prop.icon}`}
                            className="sidebar-icon"
                          />
                          <span>{prop.name}</span>
                        </p>
                      </NavLink>
                    </li>
                  )}
                </React.Fragment>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
