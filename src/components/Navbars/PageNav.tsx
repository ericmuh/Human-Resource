// Snippets : for testing purposes
import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNav: React.FC = (props: any) => {
  return (
    <Row>
      {!props.routes
        ? null
        : props.routes.map((route: any, key: number) => (
            <Col key={key}>
              <Link to={route.path}>{route.name}</Link>
            </Col>
          ))}
    </Row>
  );
};

export default PageNav;
