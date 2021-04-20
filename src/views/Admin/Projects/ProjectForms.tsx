import * as React from "react";
import { Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Card from "../../../components/Card/Card";
import Confirm from "./Forms/Confirm";
import ProjectMovements from "./Forms/ProjectMovements";
import ProjectSummary from "./Forms/ProjectSummary";
import ProjectSupply from "./Forms/ProjectSupply";
import ProjectTeams from "./Forms/ProjectTeams";
import ProjectWorkPlan from "./Forms/ProjectWorkPlan";
import FormNav from "./_partials/_FormNav";
import { postProjects } from "../../../context/actions/actions";
const initialValues = {
  // Project Summary Data

  name: "",
  program: "",
  donor: "",
  location: "",
  amount: "",
  overral_strategy: "",
  start_date: "",
  end_date: "",
  donor_agreement: "",

  // Project Workplan

  activity: "",
  description: "",
  milestones: [
    {
      cost: "",
      duration: "",
      indicator: "",
    },
  ],

  // Project supply

  supplies: [
    {
      name: "",
      units: "",
      value: "",
      vendor: "",
    },
  ],

  // Project Teams
  teams: [
    {
      status: "",
      location: "",
      id_number: "",
      value: "",
    },
  ],

  // Movements
  travel_role: "",
  travel_type: "",
  reason: "",
  movement_start_date: "",
  movement_end_date: "",
};

const ProjectForms = (props: any) => {
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
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      actions.setSubmitting(true);
                      // SUBMIT DATA

                      const project_summary_object = {
                        name: values.name,
                        program: values.program,
                        donor: values.donor,
                        location: values.location,
                        amount: values.amount,
                        overral_strategy: values.overral_strategy,
                        start_date: values.start_date,
                        end_date: values.end_date,
                        donor_agreement: values.donor_agreement,
                      };
                      const summaryFormData = new FormData();
                      summaryFormData.append(
                        "strategic_plan",
                        values.donor_agreement
                      );
                      for (const [key, value] of Object.entries(
                        project_summary_object
                      )) {
                        if (
                          key !== "start_date" &&
                          key !== "end_date" &&
                          key !== "strategic_plan"
                        ) {
                          summaryFormData.append(key, value);
                        }
                      }

                      const project_data = {
                        all_projects: {
                          projects: [],
                          workplans: [],
                          supplys: [],
                          teams: [],
                          movements: [],
                        },
                        project_summary: summaryFormData,
                        project_workplan: {
                          activity: values.activity,
                          description: values.description,
                        },
                        project_supply: values.supplies,
                        project_team: values.teams,
                        project_movement: {
                          travel_role: values.travel_role,
                          travel_type: values.travel_role,
                          reason: values.reason,
                          start_date: "",
                          end_date: "",
                        },
                        project_milestones: values.milestones,
                      };
                      async () => {
                        // post data
                        postProjects(project_data);
                      };

                      actions.setSubmitting(false);
                      props.history.push("/programs");
                    }}
                  >
                    {({ values, errors, touched, setFieldValue }) => (
                      <Form className="sub-form">
                        <Switch>
                          <Redirect
                            from={path}
                            exact
                            to={`${path}/add-project-summary`}
                          />
                          <Route path={`${path}/add-project-summary`}>
                            <ProjectSummary
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/add-project-workplan`}>
                            <ProjectWorkPlan
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/add-project-supply`}>
                            <ProjectSupply
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/add-project-teams`}>
                            <ProjectTeams
                              setFieldValue={setFieldValue}
                              values={values}
                            />
                          </Route>
                          <Route path={`${path}/add-project-movements`}>
                            <ProjectMovements
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

export default ProjectForms;
