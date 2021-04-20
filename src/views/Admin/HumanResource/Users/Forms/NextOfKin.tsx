import { Field } from "formik";
import * as React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FormField from "../../../../../components/FormField/FormField";

const NextOfKin = (props: any) => {
  return (
    <>
      <FormGroup>
        <FormLabel className="left">Full Names</FormLabel>

        <FormField as={FormControl} type="text" name="name" />
      </FormGroup>

      <Row className="mt-3">
        <Col>
          <FormLabel className="left">Gender</FormLabel>
          <FormField
            as="select"
            type="select"
            className="form-control"
            
            name="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </FormField>
        </Col>
        <Col>
          <FormLabel className="left"> Relationship</FormLabel>
          <FormField
            as={FormControl}
            type="text"
            className="form-control"
            name="relationship"
          />
        </Col>
        <Col>
          <FormLabel className="left"> Nationality</FormLabel>
          <FormField
            as={FormControl}
            type="text"
            className="form-control"
            name="nationality"
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <FormLabel className="left">Village</FormLabel>
          <FormField
            as={FormControl}
            type="text"
            className="form-control"
            name="village"
          />
        </Col>
        <Col>
          <FormLabel className="left"> sub_county</FormLabel>
          <FormField
            as={FormControl}
            type="text"
            className="form-control"
            name="sub_county"
          />
        </Col>
        <Col>
          <FormLabel className="left"> Country</FormLabel>
          <FormField
            as={FormControl}
            type="text"
            className="form-control"
            name="country"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <FormLabel className="left">Telephone</FormLabel>
          <FormField
            as={FormControl}
            type="number"
            className="form-control"
            name="telephone"
          />
        </Col>
        <Col>
          <FormLabel className="left"> mobile</FormLabel>
          <FormField
            as={FormControl}
            type="number"
            className="form-control"
            name="mobile"
          />
        </Col>
        <Col>
          <FormLabel className="left"> email</FormLabel>
          <FormField
            as={FormControl}
            type="email"
            className="form-control"
            name="email"
          />
        </Col>
      </Row>

      <FormGroup>
        <NavLink
          to={`${props.path}/add-professional-background`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
        <NavLink
          to={`${props.path}/add-basic-data`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>

    </>
  );
};

export default NextOfKin;
