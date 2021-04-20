import * as React from "react";
import { Container, Row, Col, FormLabel, FormControl } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// components
import Card from "../../../../components/Card/Card";
import FormField from "../../../../components/FormField/FormField";
 
// react context
import { ADD_LOCATION } from "../../../../context/actions/actionTypes";
import { postData } from "../../../../context/actions/actions";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";

const yup_string_required = Yup.string()
  .min(2, "short")
  .max(50, "Too Long")
  .required();
const yup_number_required = Yup.number().required()
const LocationSchema = Yup.object().shape({
  name: yup_string_required,
  ownership: yup_string_required,
  gps: yup_string_required,
  area: yup_number_required,
  category: yup_string_required,
  block_name: yup_string_required,
  street_name: yup_string_required,
  city_name: yup_string_required,
  country: yup_string_required,
  contact_person: yup_string_required,
  contact_telephone: yup_string_required,
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Required"),
});

const LocationListForm = (props: any) => {
  const initialValues = {
    name: "",
    ownership: false,
    area: "",
    gps: "",
    category: "",
    block_name: "",
    street_name: "",
    city_name: "",
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
            <h2 className="page-heading">Fill Location Details</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={LocationSchema}
                    onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      // alert(JSON.stringify(values, null, 2));
                      postData({
                        dispatch,
                        url: "operations/locations",
                        data: values,
                        action_type: ADD_LOCATION,
                      });
                      actions.setSubmitting(false);
                      props.history.push("/esop/locationList");
                    }}>
                    {({ errors, touched }) => (
                      <Form className="sub-form">
                        <Row>
                          <Col md={2}>
                            <FormLabel>Location Name</FormLabel>
                          </Col>
                          <Col md={10}>
                            <FormField
                              errors={errors.name}
                              touched={touched.name}
                              isValid={touched.name && !errors.name}
                              isInvalid={!!errors.name}
                              as={FormControl}
                              type="text"
                              required
                              name="name"
                            />
                          </Col>
                        </Row>
                        <h3 className="form-sub-heading"> Address</h3>

                        <Row>
                          <Col md={3}>
                            <Row>
                              <Col md={6}>
                                <FormLabel>Leased</FormLabel>
                              </Col>
                              <Col md={6}>
                                <FormField
                                  errors={errors.ownership}
                                  touched={touched.ownership}
                                  isValid={
                                    touched.ownership && !errors.ownership
                                  }
                                  isInvalid={!!errors.ownership}
                                  as={FormControl}
                                  required
                                  type="radio"
                                  name="ownership"
                                  value="Leased"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={3}>
                            <Row>
                              <Col md={6}>
                                <FormLabel>Owned</FormLabel>
                              </Col>
                              <Col md={6}>
                                <FormField
                                  errors={errors.ownership}
                                  touched={touched.ownership}
                                  isValid={
                                    touched.ownership && !errors.ownership
                                  }
                                  isInvalid={!!errors.ownership}
                                  as={FormControl}
                                  required
                                  type="radio"
                                  name="ownership"
                                  value="Owned"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={3}>
                            <Row>
                              <Col md={6}>
                                <FormLabel>Area(Sqm)</FormLabel>
                              </Col>
                              <Col md={6}>
                                <FormField
                                  errors={errors.area}
                                  touched={touched.area}
                                  isValid={touched.area && !errors.area}
                                  isInvalid={!!errors.area}
                                  as={FormControl}
                                  type="number"
                                  required
                                  name="area"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={3}>
                            <Row>
                              <Col md={6}>
                                <FormLabel>GPS</FormLabel>
                              </Col>
                              <Col md={6}>
                                <FormField
                                  errors={errors.gps}
                                  touched={touched.gps}
                                  isValid={touched.gps && !errors.gps}
                                  isInvalid={!!errors.gps}
                                  as={FormControl}
                                  type="text"
                                  required
                                  name="gps"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row>
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
                                  required
                                  name="category">
                                  <option value="Residential">
                                    Residential
                                  </option>
                                  <option value="Commercial">Commercial</option>
                                  <option value="Industrial">Industrial</option>
                                </FormField>
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
                                  required
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
                                  required
                                  name="street_name"
                                />
                              </Col>
                            </Row>
                          </Col>

                          <Col md={6}>
                            <Row>
                              <Col md={4}>
                                <FormLabel>City name</FormLabel>
                              </Col>
                              <Col md={8}>
                                <FormField
                                  errors={errors.city_name}
                                  touched={touched.city_name}
                                  isValid={
                                    touched.city_name && !errors.city_name
                                  }
                                  isInvalid={!!errors.city_name}
                                  as={FormControl}
                                  type="text"
                                  required
                                  name="city_name"
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
                              required
                              name="country"
                            />
                          </Col>
                        </Row>
                        <h3 className="form-sub-heading"> Area Contact</h3>

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
                                  required
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
                                  required
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
                              required
                              name="email_address"
                            />
                          </Col>
                        </Row>

                        <Field
                          as={FormControl}
                          type="submit"
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

export default LocationListForm;
