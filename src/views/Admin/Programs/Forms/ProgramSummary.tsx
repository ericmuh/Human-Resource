import * as React from "react";
import { Col, Container, FormControl, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import Card from "../../../../components/Card/Card";
import FormField from "../../../../components/FormField/FormField";

const ProgramSummary = (props: any) => {
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Title</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="summary_title" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <FormLabel>Country</FormLabel>
            </Col>
            <Col md={8}>
              <FormField as={FormControl} type="text" name="summary_country" />
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
                onFocus={(e: any) => (e.target.type = "date")}
                type="text"
                name="summary_start_date"
              />
            </Col>
            <Col md={5}>
              <FormField
                as={FormControl}
                placeholder="End Date"
                onFocus={(e: any) => (e.target.type = "date")}
                type="text"
                name="summary_end_date"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <FormLabel>Goal</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="summary_goal" />
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
            name="summary_description"
          />
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <FormLabel>Stratery Plan</FormLabel>
        </Col>
        <Col md={10}>
          <FormControl
            as={FormControl}
            type="file"
            name="summary_strategic_plan"
            onChange={(event: any) => {
              props.setFieldValue(
                "summary_strategic_plan",
                event.target.files[0]
              );
            }}
          />
        </Col>
      </Row>

      <NavLink
        to="/programs/forms/programmatic-approach"
        className="submit-btn  sub-btn-right"
      >
        Next
      </NavLink>
    </>
  );
};

export default ProgramSummary;
