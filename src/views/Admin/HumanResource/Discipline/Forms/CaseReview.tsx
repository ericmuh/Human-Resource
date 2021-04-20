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
const CaseReview = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        // SUBMIT DATA

        actions.setSubmitting(false);
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="sub-form">
          <Row>
            <Col md={2}>
              <FormLabel>Upload Reviews</FormLabel>
            </Col>
            <Col md={10}>
              <FormControl
                as={FormControl}
                type="file"
                name="reviews"
                onChange={(event: any) => {
                  props.setFieldValue(
                    "reviews",
                    event.target.files[0]
                  );
                }}
              />
            </Col>
          </Row>
          <FormField
              as={FormControl}
              type="submit"
              className="submit-btn  sub-btn-right"
              value="Save"
            />
        </Form>
      )}
    </Formik>
  );
};

export default CaseReview;
