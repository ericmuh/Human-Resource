import { Form, Formik } from "formik";
import * as React from "react";
import { Col, FormControl, FormLabel, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../../../../../components/FormField/FormField";

const BDataSchema = Yup.object().shape({});

const initialValues = {
  name: "",
};
const CaseLog = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        // SUBMIT DATA

        actions.setSubmitting(false);
        props.history.push("/human-resource/discipline");
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="sub-form">
          <>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <FormLabel>Staff ID</FormLabel>
                  </Col>
                  <Col md={8}>
                    <FormField as={FormControl} type="text" name="staff_id" />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <FormLabel>Log Date : </FormLabel>
                  </Col>
                  <Col md={8}>
                    <FormField as={FormControl} type="date" name="log_date" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <FormLabel>Case Category</FormLabel>
              </Col>
              <Col md={10}>
                <FormField as={FormControl} type="text" name="category" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <FormLabel>Name of Complainant</FormLabel>
              </Col>
              <Col md={10}>
                <FormField as={FormControl} type="text" name="complainant" />
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
            <FormField
              as={FormControl}
              type="submit"
              className="submit-btn  sub-btn-right"
              value="Save"
            />
          </>
        </Form>
      )}
    </Formik>
  );
};

export default CaseLog;
