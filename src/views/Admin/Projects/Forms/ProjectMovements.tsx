import * as React from "react";
import { Field } from "formik";
import { Col, FormControl, FormLabel, Row } from "react-bootstrap";
import FormField from "../../../../components/FormField/FormField";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  travel_role: "",
  travel_type: "",
  reason: "",
  start_date: "",
  end_date: "",
};
const ProjectMovements = (props: any) => {
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Travel Role</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="travel_role" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <FormLabel>Travel Type</FormLabel>
            </Col>
            <Col md={8}>
              <FormField as={FormControl} type="text" name="travel_type" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={2}>
              <FormLabel>Duration : </FormLabel>
            </Col>
            <Col md={5}>
              <FormField
                as={FormControl}
                placeholder="Start Date"
                type="text"
                onFocus={(e: any) => (e.target.type = "date")}
                name="start_date"
              />
            </Col>
            <Col md={5}>
              <FormField
                as={FormControl}
                placeholder="End Date"
                type="text"
                onFocus={(e: any) => (e.target.type = "date")}
                name="end_date"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <FormLabel>Travel Reason</FormLabel>
        </Col>
        <Col md={10}>
          <FormField
            as="textarea"
            className="form-control"
            type="text"
            name="reason"
          />
        </Col>
      </Row>

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

export default ProjectMovements;
