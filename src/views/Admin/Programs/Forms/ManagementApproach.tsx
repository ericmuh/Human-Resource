import * as React from "react";
import { Field, FieldArray } from "formik";
import { Button, Col, FormControl, FormLabel, Row } from "react-bootstrap";
import FormField from "../../../../components/FormField/FormField";
import { NavLink } from "react-router-dom";

const ManagementApproach = (props: any) => {
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Title</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="domain_title" />
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <FormLabel>Description</FormLabel>
        </Col>
        <Col md={10}>
          <FormField
            as="textarea"
            className="form-control"
            type="text"
            name="domain_description"
          />
        </Col>
      </Row>

      {/* FieldArray */}

      <FieldArray name="domain_milestones">
        {({ insert, remove, push }) => (
          <>
            {props.values.domain_milestones.length > 0 &&
              props.values.domain_milestones.map((milestone: any, key: any) => (
                <React.Fragment key={key}>
                  <Row >
                    <Col md={4}>
                      <Row>
                        <Col md={6}>
                          <FormLabel>Milestone</FormLabel>
                        </Col>
                        <Col md={6}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`domain_milestones.${key}.indicator`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Target</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`domain_milestones.${key}.duration`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Col md={6}>
                          <FormLabel>Cost</FormLabel>
                        </Col>
                        <Col md={6}>
                          <FormField
                            as={FormControl}
                            type="number"
                            name={`domain_milestones.${key}.cost`}
                          />
                        </Col>
                      </Row>
                    </Col>
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
                  value="Add Another Milestone"
                  name="add Milestones"
                  className="form-control submit-btn"
                  onClick={() =>
                    push({
                      cost: "",
                      duration: "",
                      indicator: "",
                    })
                  }
                />
              </Col>
            </Row>
          </>
        )}
      </FieldArray>
      <NavLink
        to="/programs/forms/confirm"
        className="submit-btn  sub-btn-right"
      >
        Save
      </NavLink>
    </>
  );
};

export default ManagementApproach;
