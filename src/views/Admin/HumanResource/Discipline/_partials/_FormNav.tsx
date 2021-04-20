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
        to={`${url}/add-case-log`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Case Log
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-case-review`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
        {" "}
        Case Review
      </NavLink>
    </Col>
    <Col>
      <NavLink
        to={`${url}/add-case-discharge`}
        className="btn btn-transparent border-0 nav-link"
        activeClassName="active"
      >
      Case Discharge
      </NavLink>
    </Col>
   
  </Row>
);

export default FormNav;
