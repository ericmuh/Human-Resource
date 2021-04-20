import * as React from "react";
import {
  Container,
  Row,
  Col,
  FormLabel,
  FormControl,
  FormControlProps,
} from "react-bootstrap";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import Card from "../../../../components/Card/Card";
import { ADD_DONOR } from "../../../../context/actions/actionTypes";
import FormField from "../../../../components/FormField/FormField";
import { postData } from "../../../../context/actions/actions";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";

const yup_string_required = Yup.string()
  .min(2, "short")
  .max(50, "Too Long")
  .required();

const DonorSchema = Yup.object().shape({
  name: yup_string_required,
  acronym: yup_string_required,
  category: yup_string_required,
  plot_no: yup_string_required,
  block_name: yup_string_required,
  street_name: yup_string_required,
  city: yup_string_required,
  country: yup_string_required,
  contact_person: yup_string_required,
  contact_telephone: yup_string_required,
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Required"),
});

const DonorListForm = (props: any) => {
  const initialValues = {
    name: "",
    acronym: "",
    category: "",
    plot_no: "",
    block_name: "",
    street_name: "",
    city: "",
    country: "",
    contact_person: "",
    contact_telephone: "",
    email_address: "",
  };
  const { operations, dispatch } = React.useContext(OperationContext);

  return (
    <div className="content ">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Fill Donor Details</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={DonorSchema}
                    onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      // alert(JSON.stringify(values, null, 2));
                      postData({
                        dispatch,
                        url: "operations/donors",
                        data: values,
                        action_type: ADD_DONOR,
                      });

                      actions.setSubmitting(false);
                      props.history.push("/esop/donorList");
                    }}>
                    {({ errors, touched }) => (
                      <Form className="sub-form">
                        <Row>
                          <Col md={2}>
                            <FormLabel>Donor Name</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.name}
                              touched={touched.name}
                              isValid={touched.name && !errors.name}
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
                                <FormLabel>Acronym</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.acronym}
                                  touched={touched.acronym}
                                  isValid={touched.acronym && !errors.acronym}
                                  isInvalid={!!errors.acronym}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="acronym"
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
                                  <option value="NGO">NGO</option>
                                  <option value="Individual">Individual</option>
                                  <option value="For Profit">For Profit</option>
                                  <option value="Government">Government</option>
                                  <option value="Inter-Governmental">
                                    Inter-Governmental
                                  </option>
                                  <option value="Diplomatic Missions">
                                    Diplomatic Missions
                                  </option>
                                </FormField>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <h3 className="form-sub-heading"> Address </h3>

                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>House/Plot No.</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.plot_no}
                                  touched={touched.plot_no}
                                  isValid={touched.plot_no && !errors.plot_no}
                                  isInvalid={!!errors.plot_no}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="plot_no"
                                />
                              </Col>
                            </Row>
                          </Col>

                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Block Name</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.block_name}
                                  touched={touched.block_name}
                                  isValid={
                                    touched.block_name && !errors.block_name
                                  }
                                  isInvalid={!!errors.block_name}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="block_name"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Street Name</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.street_name}
                                  touched={touched.street_name}
                                  isValid={
                                    touched.street_name && !errors.street_name
                                  }
                                  isInvalid={!!errors.street_name}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="street_name"
                                />
                              </Col>
                            </Row>
                          </Col>

                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>City</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.city}
                                  touched={touched.city}
                                  isValid={touched.city && !errors.city}
                                  isInvalid={!!errors.city}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="city"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={2}>
                            <FormLabel>Country</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.country}
                              touched={touched.country}
                              isValid={touched.country && !errors.country}
                              isInvalid={!!errors.country}
                              as={FormControl}
                              type="text"
                              
                              name="country"
                            />
                          </Col>
                        </Row>
                        <h3 className="form-sub-heading"> Donor Contact</h3>
                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Contact Person</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.contact_person}
                                  touched={touched.contact_person}
                                  isValid={
                                    touched.contact_person &&
                                    !errors.contact_person
                                  }
                                  isInvalid={!!errors.contact_person}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="contact_person"
                                />
                              </Col>
                            </Row>
                          </Col>

                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>Telephone No.</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.contact_telephone}
                                  touched={touched.contact_telephone}
                                  isValid={
                                    touched.contact_telephone &&
                                    !errors.contact_telephone
                                  }
                                  isInvalid={!!errors.contact_telephone}
                                  as={FormControl}
                                  type="text"
                                  
                                  name="contact_telephone"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <FormLabel>Email Address</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.email_address}
                              touched={touched.email_address}
                              isValid={
                                touched.email_address && !errors.email_address
                              }
                              isInvalid={!!errors.email_address}
                              as={FormControl}
                              type="email"
                              
                              name="email_address"
                            />
                          </Col>
                        </Row>

                        <Field
                          as={FormControl}
                          type="submit"
                          className="submit-btn  sub-btn-right"
                          value="Save"
                          id="submit"
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

export default DonorListForm;
