import * as React from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, FormControl, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import FormField from "../../../../components/FormField/FormField";
import StepsFormNav from "../../../../components/Navbars/StepsFormNav";
import { ADD_PROJECT_MOVEMENT } from "../../../../context/actions/actionTypes";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";
import { IKeyable } from "../../../../common/types";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  name: "",
  location: "",
  author: "",
  category:"",
  description:"",
  start_date: "",
  end_date: "",
};
const ProductionListForm = (props: any) => {

  return (
    <div className="content ">
      <Container fluid>
      <h2 className="page-heading">Production Form</h2>
        
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      let Movements: IKeyable = new Object();

                      for (const [key, value] of Object.entries(values)) {
                        if (key !== "start_date" && key !== "end_date") {
                          Movements[key] = value;
                        }
                      }
                     
                      actions.setSubmitting(false);
                      props.history.push("/projects/confirm");
                    }}>
                    {({ errors, touched, setFieldValue }) => (
                      <Form className="sub-form">
                        <Row>
                          <Col md={2}>
                            <FormLabel>Production Name in Full</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.name}
                              touched={touched.name}
                              isValid={
                                touched.name && !errors.name
                              }
                              isInvalid={!!errors.name}
                              as={FormControl}
                              type="text"
                              name="name"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Location</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.location}
                                  touched={touched.location}
                                  isValid={
                                    touched.location && !errors.location
                                  }
                                  isInvalid={!!errors.location}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="location"
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
                                  errors={errors.start_date}
                                  touched={touched.start_date}
                                  isValid={
                                    touched.start_date && !errors.start_date
                                  }
                                  isInvalid={!!errors.start_date}
                                  as={FormControl}
                                  placeholder="Start Date"
                                  type="text"
                                  onFocus={(e: any) => (e.target.type = "date")}
                                  
                                  name="start_date"
                                />
                              </Col>
                              <Col md={5}>
                                <FormField
                                  errors={errors.end_date}
                                  touched={touched.end_date}
                                  isValid={touched.end_date && !errors.end_date}
                                  isInvalid={!!errors.end_date}
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
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Author</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.author}
                                  touched={touched.author}
                                  isValid={touched.author && !errors.author}
                                  isInvalid={!!errors.author}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="author"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Category</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.category}
                                  touched={touched.category}
                                  isValid={touched.category && !errors.category}
                                  isInvalid={!!errors.category}
                                  as="select"
                                  type="select"
                                  className="form-control"
                                  
                                  name="category">
                                   <option value="NGO">Fund Raising</option>
                                  <option value="Individual">Celebrations</option>
                                  <option value="For Profit">Annual Meeting</option>
                                  <option value="Government">Mid-Year Meeting</option>
                                  <option value="Inter-Governmental">
                                     Executive Meeting
                                  </option>
                                </FormField>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <FormLabel>Description</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.description}
                              touched={touched.description}
                              isValid={touched.description && !errors.description}
                              isInvalid={!!errors.description}
                              as="textarea"
                              className="form-control"
                              type="text"
                              
                              name="description"
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

export default ProductionListForm;
