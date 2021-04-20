import { Field } from "formik";
import * as React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { string_optional } from "../../../../../common/yup_validation";
import FormField from "../../../../../components/FormField/FormField";

const Declaration = (props: any) => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Name</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="name" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Date</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="date" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col md={2}>
            <FormField
              as={FormControl}
              
              type="checkbox"
              name="accepted"
              value="accepted"
            />
          </Col>
          <Col md={10}>
            I declare that the information I have provided herein and
            disclosures made are true to the best of my knowledge. I have red
            and understood the contract terms, And comply, observe and be bound
            by the same
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <NavLink
          to={`${props.path}/add-contact-info`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
        <NavLink
          to={`${props.path}/add-banking-details`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>
    </>
  );
};

export default Declaration;
