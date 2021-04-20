import * as React from "react";
import { Form, Formik, FieldArray } from "formik";
import { Button, Col, FormControl, FormLabel, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../../../../../components/FormField/FormField";

const BDataSchema = Yup.object().shape({});

const initialValues = {
  name: "",
  activities: [
    {
      activity: "",
      location: "",
      time: "",
    },
  ],
};
const TimeSheets = (props: any) => {
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
          <FieldArray name="activities">
            {({ insert, remove, push }) => (
              <>
                {values.activities.length > 0 &&
                  values.activities.map((supply: any, key: number) => (
                    <React.Fragment key={key}>
                      <Row>
                        <Col md={2}>
                          <FormLabel>Activity</FormLabel>
                        </Col>
                        <Col md={10}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`activities.${key}.activity`}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={2}>
                          <FormLabel>Role</FormLabel>
                        </Col>
                        <Col md={10}>
                          <FormField
                            name={`activities.${key}.location`}
                            as={FormControl}
                            type="text"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={2}>
                          <FormLabel>Time</FormLabel>
                        </Col>
                        <Col md={10}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`activities.${key}.time`}
                          />
                        </Col>
                      </Row>


                      <Row>
                        <Col md={1}>
                          <Button
                            type="button"
                            id="remove-btn"
                            className="btn btn-danger btn-right mt-2"
                            onClick={() => remove(key)}
                          >
                            x
                          </Button>
                        </Col>
                      </Row>
                    </React.Fragment>
                  ))}

                <Row>
                  <Col md={2}>
                    <FormField
                      as={FormControl}
                      type="button"
                      value="Add Another Activity"
                      name="add supply"
                      className="form-control submit-btn"
                      onClick={() =>
                        push({
                          id_number: "",
                          role: "",
                          location: "",
                          status: "",
                        })
                      }
                    />
                  </Col>
                </Row>
              </>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default TimeSheets;
