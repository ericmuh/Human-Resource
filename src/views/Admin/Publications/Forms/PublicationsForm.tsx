import * as React from "react";
import { Container, Row, Col, FormLabel, FormControl } from "react-bootstrap";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Card from "../../../../components/Card/Card";
import FormField from "../../../../components/FormField/FormField";
import StepsFormNav from "../../../../components/Navbars/StepsFormNav";
import { NavLink } from "react-router-dom";
import { ADD_PUBLICATION } from "../../../../context/actions/actionTypes";
import { ProgramContext } from "../../../../context/contexts/Programs/Program";
import { postData } from "../../../../context/actions/actions";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  title: "",
  program: "",
  donor: "",
  author: "",
  name_of_publisher: "",
  document_type: "",
  publication_date: "",
  description: "",
  attachment: "",
};
const PublicationsForm = (props: any) => {
  const { programs, dispatch } = React.useContext(ProgramContext);

  return (
    <div className="content ">
      <Container fluid>
        <StepsFormNav
          content={
            <>
              <Col>Add Policies, Standards, Memo</Col>
            </>
          }
        />
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    const formData = new FormData();
                    formData.append("attachment", values.attachment);
                    for (const [key, value] of Object.entries(values)) {
                      if (
                        key !== "publication_date" &&
                        key !== "attachment"
                      ) {
                        formData.append(key, value);
                      }
                    }
                    postData({
                      dispatch,
                      url: "publications/publications",
                      data: formData,
                      action_type: ADD_PUBLICATION,
                    });
                    actions.setSubmitting(false);
                    props.history.push("/publications");
                  }}>
                  {({ errors, touched, setFieldValue }) => (
                    <Form className="sub-form">
                      <Row>
                        <Col md={2}>
                          <FormLabel> Document Title</FormLabel>
                        </Col>
                        <Col md={10}>
                          <FormField
                           
                            as={FormControl}
                            type="text"
                            name="title"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Document type</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                               
                                as="select"
                                type="select"
                                className="form-control"
                               
                                name="document_type">
                                <option value="Ethics">Ethics</option>
                                <option value="Standards">Standards</option>
                                <option value="Policies">Policies</option>
                                <option value="Memos">Memos</option>
                                <option value="Manual">Manual</option>
                              </FormField>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Publication Date</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                                
                                as={FormControl}
                                type="text"
                               
                                name="publication_date"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Donor Name</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                              
                                as={FormControl}
                                type="text"
                               
                                name="name_of_publisher"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Author</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                              
                                as={FormControl}
                                type="text"
                               
                                name="author"
                              />
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
                            
                            as="textarea"
                            className="form-control"
                            type="text"
                           
                            name="description"
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col md={2}>
                          <FormLabel>Attach Document</FormLabel>
                        </Col>
                        <Col md={10}>
                          <FormControl
                  
                            as={FormControl}
                            type="file"
                           
                            name="attachment"
                            onChange={(event: any) => {
                              setFieldValue(
                                "attachment",
                                event.target.files[0]
                              );
                            }}
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
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PublicationsForm;
