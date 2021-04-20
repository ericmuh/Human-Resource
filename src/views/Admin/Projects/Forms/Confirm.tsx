import * as React from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import Card from "../../../../components/Card/Card";
import { postProjects } from "../../../../context/actions/actions";
import { GET_FORM_DATA_PROJECT } from "../../../../context/actions/actionTypes";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";
import { retrieveFromLocalStorage } from "../../../../Utils/LocalStorage";

const ConfirmProject = (props: any) => {
  const { projects, dispatch } = React.useContext(ProjectContext);

  React.useEffect(() => {
    dispatch({ type: GET_FORM_DATA_PROJECT });
    console.log({ projects });
  }, []);

  return (
    <div className="content ">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={{
                      submit: "",
                    }}
                    onSubmit={(values, actions) => {
                      actions.setSubmitting(true);
                      postProjects(projects);
                      actions.setSubmitting(false);
                      props.history.push("/donor-projects");
                    }}>
                    {({ values, errors, touched }) => (
                      <Form>
                        <Row>
                          <Col>
                            <Field
                              as={FormControl}
                              type="submit"
                              name="save"
                              className="btn btn-primary"
                              value="Confirm and Send Data"
                            />
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConfirmProject;
