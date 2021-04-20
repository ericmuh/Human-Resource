import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const items = [
  {
    path: "add-basic-data",
    name: "Basic Data",
  },
  {
    path: "add-next-of-kin",
    name: "Next of Kin",
  },
  {
    path: "add-professional-background",
    name: "Professional Background",
  },
  {
    path: "add-banking-details",
    name: "Banking Details",
  },
  {
    path: "add-declaration",
    name: "Declaration",

    parent: "human-resource",
  },
  {
    path: "add-contact-info",
    name: "Contact Info",
  },
  {
    path: "add-attachments",
    name: "Attachments",
  },
];

const FormNav = (props: any) => (
  <Row className="page-heading">
    {items.map((item, key) => (
      <Col key={key}>
        <NavLink
          to={`${props.url}/${item.path}`}
          className="btn btn-transparent border-0 nav-link"
          activeClassName="active"
        >
          {item.name}
        </NavLink>
      </Col>
    ))}
  </Row>
);

export default FormNav;
