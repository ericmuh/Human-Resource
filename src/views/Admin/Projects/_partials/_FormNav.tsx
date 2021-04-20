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
        to={`${url}/add-project-summary`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Project Summary
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-project-workplan`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Work Plan
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-project-supply`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
       Supply
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-project-teams`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
       Teams
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-project-movements`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
       Movements
      </NavLink>
    </Col>
  </Row>
);

export default FormNav;
