import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
// calendar : Only for testing
import Calendar from "react-calendar";
import Card from "../../../components/Card/Card";
const Dashboard = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={6}>
            <Calendar onChange={() => onChange} value={value} />
          </Col>

          <Col md={6}>
            <Row>
              <Col>
                <Card
                  content={
                    <Container fluid>
                      <div className="upcoming-events">
                        <p className="events">
                          Event Name{" "}
                        </p>
                      </div>
                      <div className="upcoming-events">
                        <p className="events">
                          Event Name{" "}
                        </p>
                      </div>
                    </Container>
                  }
                />
              </Col>
              <Col>
                <Card
                  content={
                    <Container fluid>
                      <div className="upcoming-events">
                        <p className="events">
                          Event Name{" "}
                        </p>
                      </div>
                      <div className="upcoming-events">
                        <p className="events">
                          Event Name{" "}
                        
                        </p>
                      </div>
                    </Container>
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              content={
                <Container fluid>
                  <div className="upcoming-events">
                    <p className="events">
                      Event Name <span className="days"> 40 Days to go</span>
                    </p>
                  </div>
                  <div className="upcoming-events">
                    <p className="events">
                      Event Name <span className="days"> 40 Days to go</span>
                    </p>
                  </div>
                </Container>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
