import { Form, Formik } from "formik";
import * as React from "react";
import { Button, Col, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../../../../../components/FormField/FormField";
import SkeletonTableRows from "../../../../../components/Skeletons/SkeletonTableRows";
import { thArrayPlanning } from "../../../../../variables/Variables";

const BDataSchema = Yup.object().shape({});
const initialValues = {
  name: "",
};
const PerformancePlanning = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        // SUBMIT DATA

        actions.setSubmitting(false);
        props.history.push("/human-resource/users");
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="sub-form">
          <h3 className="form-sub-heading"> EMPLOYEE INFORMATION</h3>
          <Row>
            <Col md={4}>
              <Row>
                <Col md={4}>
                  <FormLabel>Staff ID</FormLabel>
                </Col>
                <Col md={8}>
                  <FormField as={FormControl} type="text" name="staff_id" />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <Col md={4}>
                  <FormLabel>Planning Date</FormLabel>
                </Col>
                <Col md={8}>
                  <FormField as={FormControl} type="date" name="staff_id" />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <Col md={4}>
                  <FormLabel>Duration : </FormLabel>
                </Col>

                <Col md={8}>
                  <FormField as={FormControl} type="text" name="duration" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FormLabel>Attachments</FormLabel>
            </Col>
            <Col md={10}>
              <FormControl
                as={FormControl}
                type="file"
                name="donor_agreement"
                onChange={(event: any) => {
                  props.setFieldValue("donor_agreement", event.target.files[0]);
                }}
              />
            </Col>
          </Row>
          <h3 className="form-sub-heading"> EMPLOYEE INFORMATION</h3>
          <Button> Create Resutls</Button>

          <Row>
            <Col md={12}>
              <Table hover table-responsive="true">
                <thead>
                  <tr>
                    {thArrayPlanning.map((prop, key) => {
                      return <th key={key}>{prop}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  
                    <SkeletonTableRows columns={thArrayPlanning} />
           
                </tbody>
              </Table>
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

export default PerformancePlanning;
