import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import Card from "../../../../components/Card/Card";
import CaseDischarge from "./pages/PerformancePlanning";
import CaseLog from "./pages/Appraisals";
import CaseReview from "./pages/TimeSheets";
import {Nav, Routes} from "./_partials/Navigation";

const BDataSchema = Yup.object().shape({});

const initialValues = {
  name: "",
};
const Staff = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="content ">
      <Container fluid>
        <Nav url={url} />
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Routes path={path} rest={[path]}/>
                </>
              }
            />
          </Col>
        </Row>
        {}
      </Container>
    </div>
  );
};

export default Staff;
