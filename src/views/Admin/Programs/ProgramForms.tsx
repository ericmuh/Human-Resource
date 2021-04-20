import * as React from "react";
import { Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { ProgramContext } from "../../../context/contexts/Programs/Program";
import ManagementApproach from "./Forms/ManagementApproach";
import ProgrammaticApproach from "./Forms/ProgrammaticApproach";
import ProgramSummary from "./Forms/ProgramSummary";
import FormNav from "./_partials/_FormNav";
import Confirm from "./Forms/Confirm";
import { postData, postPrograms } from "../../../context/actions/actions";
const initialValues = {
  // program Summary Data
  summary_title: "",
  summary_country: "",
  summary_goal: "",
  summary_description: "",
  summary_start_date: "",
  summary_end_date: "",
  summary_strategic_plan: "",

  // Programmatic Approach Data

  theme_title: "",
  theme_description: "",
  theme_indicators: [
    {
      name: "",
      cost: "",
      duration: "",
    },
  ],
  // Programitc Management Data
  domain_title: "",
  domain_description: "",
  domain_milestones: [
    {
      indicator: "",
      cost: "",
      duration: "",
    },
  ],
};

const ProgramForms = (props: any) => {
  let { path, url } = useRouteMatch();

  const { programs, dispatch } = React.useContext(ProgramContext);
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
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      actions.setSubmitting(true);
                      // SUBMIT DATA

                      const program_summary_object = {
                        title: values.summary_title,
                        country: values.summary_country,
                        goal: values.summary_goal,
                        description: values.summary_description,
                        start_date: values.summary_start_date,
                        end_date: values.summary_end_date,
                        strategic_plan: values.summary_strategic_plan,
                      };
                      const summaryFormData = new FormData();
                      summaryFormData.append(
                        "strategic_plan",
                        program_summary_object.strategic_plan
                      );
                      for (const [key, value] of Object.entries(
                        program_summary_object
                      )) {
                        if (
                          key !== "start_date" &&
                          key !== "end_date" &&
                          key !== "strategic_plan"
                        ) {
                          summaryFormData.append(key, value);
                        }
                      }

                      const program_data = {
                        all_programs: {
                          programs: [],
                          programmatic_approaches: [],
                          management_approaches: [],
                          indicators: [],
                          milestones: [],
                        },
                        program_summary: summaryFormData,
                        programmatic_approach: {
                          theme_title: values.theme_title,
                          description: values.theme_description,
                        },
                        management_approach: {
                          domain_title: values.domain_title,
                          description: values.domain_description,
                        },
                        program_milestones: values.domain_milestones,
                        program_indicators: values.theme_indicators,
                      };

                      // Logout
                      console.log("helloooooooooooooooooo================");
                      postPrograms(program_data);
                      actions.setSubmitting(false);
                      props.history.push("/programs");
                    }}
                  >
                    {({ values, errors, touched, setFieldValue }) => (
                      <Form className="sub-form">
                        <Switch>
                          <Redirect from={path} exact to={`${path}/summary`} />
                          <Route path={`${path}/summary`}>
                            <ProgramSummary
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/programmatic-approach`}>
                            <ProgrammaticApproach
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/management-approach`}>
                            <ManagementApproach
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>

                          <Route path={`${path}/confirm`}>
                            <Confirm />
                          </Route>
                        </Switch>
                      </Form>
                    )}
                  </Formik>
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

export default ProgramForms;
