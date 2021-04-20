import * as React from "react";
import {
  Col,



  Container,
  Row
} from "react-bootstrap";
import Card from "../../../components/Card/Card";

const Settings = () => {
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Staff</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <h2>Comming Soon</h2>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Settings;
