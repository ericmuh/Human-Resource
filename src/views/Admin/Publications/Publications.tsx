import * as React from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, FormLabel, Row, FormControl } from "react-bootstrap";
import FormField from "../../../components/FormField/FormField";
import { NavLink } from "react-router-dom";
import Card from "../../../components/Card/Card";
import placeholder from "../../../assets/img/placeholder.svg";
import { PublicationContext } from "../../../context/contexts/Publications/Publications";
import { getData } from "../../../context/actions/actions";
import { GET_PUBLICATION } from "../../../context/actions/actionTypes";
import SkeletonFile from "../../../components/Skeletons/SkeletonFile";
const initialValues = {
  file_name: "",
  document_type: "",
};

const Publications = (props: any) => {
  const { publications, dispatch } = React.useContext(PublicationContext);

  React.useEffect(() => {
    getData({
      dispatch,
      url: "publications/publications",
      action_type: GET_PUBLICATION,
    });
  }, []);
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Publications</h2>
          </Col>
        </Row>
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
                      // alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }}>
                    {({ errors, touched }) => (
                      <Row>
                        <Form className="sub-form col-10 search">
                          <Row>
                            <Col md={5}>
                              <FormLabel>File Name</FormLabel>
                              <FormField
                                errors={errors.file_name}
                                touched={touched.file_name}
                                isValid={touched.file_name && !errors.file_name}
                                isInvalid={!!errors.file_name}
                                as={FormControl}
                                className=" form-control form-control-sm"
                                type="text"
                                name="file_name"
                              />
                            </Col>
                            <Col md={5}>
                              <FormLabel> Document Type</FormLabel>
                              <FormField
                                errors={errors.document_type}
                                touched={touched.document_type}
                                isValid={
                                  touched.document_type && !errors.document_type
                                }
                                isInvalid={!!errors.document_type}
                                as="select"
                                type="select"
                                className=" form-control form-control-sm"
                                
                                name="document_type">
                                <option value="Ethics">Ethics</option>
                                <option value="Standards">Standards</option>
                                <option value="Policies">Policies</option>
                                <option value="Memos">Memos</option>
                                <option value="Manual">Manual</option>
                              </FormField>
                            </Col>
                            <Col md={2}>
                              <Field
                                as={FormControl}
                                type="submit"
                                name="save"
                                className="submit-btn mt-4 "
                                value="Filter"
                              />
                            </Col>
                          </Row>
                        </Form>

                        <Col md={2}>
                          <NavLink
                            to="publications/add-publication"
                            className="btn btn-info   mt-4">
                            {" "}
                            Add New{" "}
                          </NavLink>
                        </Col>
                      </Row>
                    )}
                  </Formik>
                </>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <Row>
                  {publications.publications.length === 0
                    ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
                        <Col md={4} key={key}>
                          <Card
                            border
                            plain
                            content={<SkeletonFile theme="light" />}
                          />
                        </Col>
                      ))
                    : publications.publications.map(
                        (publication: any, key: number) => (
                          <Col md={4} key={key}>
                            <Card
                              border
                              plain
                              content={
                                <Row>
                                  <Col md={4}>
                                    <img
                                      src={placeholder}
                                      alt="file type"
                                      width="100px"
                                      height="100px"
                                    />
                                  </Col>
                                  <Col md={8}>
                                    <div className="pub-info">
                                      <h6 className="bold">
                                        {" "}
                                        {publication.title}
                                      </h6>
                                      <p className="text-muted">
                                        {" "}
                                        {publication.author}
                                      </p>
                                      <p className="text-muted">
                                        {" "}
                                        {publication.publication_date}
                                      </p>
                                    </div>
                                    <div className="pub-links">
                                      <button className="btn btn-warining btn-sm">
                                        {" "}
                                        View Details
                                      </button>
                                      <button className="btn btn-info btn-sm">
                                        {" "}
                                        Download
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              }
                            />
                          </Col>
                        )
                      )}
                </Row>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Publications;

//
