import * as React from "react";
import { Field, FieldArray } from "formik";
import { Button, Col, FormControl, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FormField from "../../../../components/FormField/FormField";

const ProgrammaticApproach = (props: any) => {
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Title</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="theme_title" />
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
            name="description"
          />
        </Col>
      </Row>

      <FieldArray name="theme_indicators">
        {({ insert, remove, push }) => (
          <>
            {props.values.theme_indicators.length > 0 &&
              props.values.theme_indicators.map((indicator: any, key: any) => (
                <React.Fragment key={key}>
                  <Row >
                    <Col md={4}>
                      <Row>
                        <Col md={6}>
                          <FormLabel>Indicator</FormLabel>
                        </Col>
                        <Col md={6}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`theme_indicators.${key}.name`}
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
                            name={`theme_indicators.${key}.target`}
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
                            name={`theme_indicators.${key}.cost`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
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
                  value="Add Another Indicator"
                  className="form-control submit-btn"
                  name="add name"
                  onClick={() =>
                    push({
                      indicator: "",
                      cost: "",
                      duration: "",
                    })
                  }
                />
              </Col>
            </Row>
          </>
        )}
      </FieldArray>
      <NavLink
        to="/programs/forms/management-approach"
        className="submit-btn  sub-btn-right"
      >
        Next
      </NavLink>
    </>
  );
};

export default ProgrammaticApproach;
