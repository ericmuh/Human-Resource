import * as React from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import FormField from "../../../../components/FormField/FormField";
import StepsFormNav from "../../../../components/Navbars/StepsFormNav";
import { ADD_PROJECT_TEAM } from "../../../../context/actions/actionTypes";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  teams: [
    {
      status: "",
      location: "",
      id_number: "",
      value: "",
    },
  ],
};
const ProjectTeams = (props: any) => {
  const { projects, dispatch } = React.useContext(ProjectContext);

  return (
    <>
      <FieldArray name="teams">
        {({ insert, remove, push }) => (
          <>
            {props.values.teams.length > 0 &&
              props.values.teams.map((supply: any, key: number) => (
                <React.Fragment key={key}>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>ID Number</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`teams.${key}.id_number`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Role</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            name={`teams.${key}.value`}
                            as={FormControl}
                            type="text"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Location</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`teams.${key}.location`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Status</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            name={`teams.${key}.status`}
                            as={FormControl}
                            type="text"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={1}>
                      <Button
                        type="button"
                        id="remove-btn"
                        className="btn btn-danger btn-right mt-2"
                        onClick={() => remove(key)}
                      >
                        x
                      </Button>
                    </Col>
                  </Row>
                </React.Fragment>
              ))}

            <Row>
              <Col md={2}>
                <Field
                  as={FormControl}
                  type="button"
                  value="Add Another Team Member"
                  name="add supply"
                  className="form-control submit-btn"
                  onClick={() =>
                    push({
                      id_number: "",
                      role: "",
                      location: "",
                      status: "",
                    })
                  }
                />
              </Col>
            </Row>
          </>
        )}
      </FieldArray>
      <Field
        as={FormControl}
        type="submit"
        name="save"
        className="submit-btn  sub-btn-right"
        value="Save"
      />
    </>
  );
};

export default ProjectTeams;
