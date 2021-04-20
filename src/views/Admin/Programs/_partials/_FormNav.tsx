import * as React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

interface IProps {
  url: string;
}
const FormNav = ({ url }: IProps) => (
  <Row className="page-heading">
    <Col>
      <NavLink
        to={`${url}/summary`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Program Summary
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/programmatic-approach`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Programmatic Approach
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to="/programs/forms/management-approach"
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        Management Approach
      </NavLink>
    </Col>
  </Row>
);

export default FormNav;
