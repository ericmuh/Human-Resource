import * as React from "react";
import { Field, Formik } from "formik";
import { Col, Container, FormControl, FormLabel, Row } from "react-bootstrap";
import FormField from "../../../../components/FormField/FormField";
import { Form } from "react-bootstrap";
import Card from "../../../../components/Card/Card";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  travel_role: "",
  travel_type: "",
  reason: "",
  start_date: "",
  end_date: "",
};
const LeaveForm = (props: any) => {
  return (
    <div className="content ">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Fill Location Details</h2>
          </Col>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      // alert(JSON.stringify(values, null, 2));

                      actions.setSubmitting(false);
                      props.history.push("/esop/locationList");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="sub-form">
                        <Row>
                          <Col md={2}>
                            <FormLabel>Staff ID </FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              as={FormControl}
                              type="text"
                              name="staff_id"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Travel Type</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  as={FormControl}
                                  type="text"
                                  name="travel_type"
                                />
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
                            <FormLabel>
                              Description of Pending Asynments during leave
                            </FormLabel>
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
                      </Form>
                    )}
                  </Formik>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeaveForm;
