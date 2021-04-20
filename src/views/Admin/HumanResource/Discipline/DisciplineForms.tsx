import { Form, Formik } from "formik";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import Card from "../../../../components/Card/Card";
import { saveToLocalStorage } from "../../../../Utils/LocalStorage";
import CaseDischarge from "./Forms/CaseDischarge";
import CaseLog from "./Forms/CaseLog";
import CaseReview from "./Forms/CaseReview";
import FormNav from "./_partials/_FormNav";

const BDataSchema = Yup.object().shape({});

const initialValues = {
  name: "",
};
const DisciplineForms = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="content ">
      <Container fluid>
        <FormNav url={url} />
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Switch>
                    <Redirect from={path} exact to={`${path}/add-case-log`} />
                    <Route path={`${path}/add-case-log`}>
                        <CaseLog/>
                    </Route>

                    <Route path={`${path}/add-case-review`}>
                        <CaseReview/>
                    </Route>
                    <Route path={`${path}/add-case-discharge`}>
                        <CaseDischarge/>
                    </Route>
                  </Switch>
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

export default DisciplineForms;
