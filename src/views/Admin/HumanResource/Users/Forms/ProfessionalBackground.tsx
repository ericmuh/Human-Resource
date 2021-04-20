import { Field, FieldArray, Form, Formik } from "formik";
import * as React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { string_optional } from "../../../../../common/yup_validation";
import Card from "../../../../../components/Card/Card";
import FormField from "../../../../../components/FormField/FormField";
import HRNav from "../_partials/_FormNav";

const ProfessionalBackgroundSchema = Yup.object().shape({
  name: string_optional,
  gender: string_optional,
  nationality: string_optional,
  relationship: string_optional,
  village: string_optional,
  sub_county: string_optional,
  period_of_service: string_optional,
  district: string_optional,
  telephone: string_optional,
  recent_designation: string_optional,
  recent_gross_income: string_optional,
});
const initialValues = {
  name: "",
  gender: "",
  nationality: "",
  recent_gross_income: "",
  village: "",
  sub_county: "",
  period_of_service: "",
  recent_designation: "",
  recent_employer: "",
  description: "",
  qualifications: [
    {
      year: "",
      institution: "",
      award: "",
    },
  ],
};

const ProfessionalBackground = (props: any) => {
  return (
    <>
      {/* FieldArray */}
      <FormGroup>
        <h3 className="form-sub-heading">
          {" "}
          A. Least of Highest professional Qaulifications(at least three)
        </h3>

        <FieldArray name="qualifications">
          {({ insert, remove, push }) => (
            <>
              {props.values.qualifications.length > 0 &&
                props.values.qualifications.map(
                  (indicator: any, key: number) => (
                    <React.Fragment key={key}>
                      <Row key={key}>
                        <Col md={4}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Year</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                                as={FormControl}
                                type="text"
                                name={`qualifications.${key}.year`}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Institute</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                                as={FormControl}
                                type="text"
                                name={`qualifications.${key}.institute`}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md={4}>
                          <Row>
                            <Col md={4}>
                              <FormLabel>Award</FormLabel>
                            </Col>
                            <Col md={8}>
                              <FormField
                                as={FormControl}
                                type="number"
                                name={`qualifications.${key}.award`}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md={1}>
                          <Button
                            type="button"
                            id="remove-btn"
                            className="btn btn-danger btn-right mt-2"
                            onClick={() => remove(key)}
                          >
                            x{" "}
                          </Button>
                        </Col>
                      </Row>
                    </React.Fragment>
                  )
                )}

              <Row>
                <Field
                  as={FormControl}
                  type="button"
                  value="Add Another Qualification"
                  name="add Milestones"
                  className="form-control submit-btn btn-right"
                  onClick={() =>
                    push({
                      year: "",
                      institute: "",
                      award: "",
                    })
                  }
                />
              </Row>
            </>
          )}
        </FieldArray>
      </FormGroup>

      <FormGroup>
        <h3 className="form-sub-heading">
          {" "}
          B. Key Expertise and Competence(Brief Outline){" "}
        </h3>

        <FormField
          as="textarea"
          className="form-control"
          type="text"
          
          name="description"
        />
      </FormGroup>

      {/* ============= Work History =============== */}

      <FormGroup>
        <h3 className="form-sub-heading"> C. Work History </h3>

        <Row>
          <Col md={2}>
            <FormLabel>Recent Employer</FormLabel>
          </Col>
          <Col md={10}>
            <FormField
              as={FormControl}
              type="text"
              
              name="recent_employer"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <FormLabel>Role/Designation</FormLabel>
              </Col>
              <Col md={8}>
                <FormField
                  as={FormControl}
                  type="text"
                  
                  name="recent_designation"
                />
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={4}>
                <FormLabel>Period of Service</FormLabel>
              </Col>
              <Col md={8}>
                <FormField type="text"  name="period_of_service" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      {/* ============= Gross Income =============== */}

      <FormGroup>
        <h3 className="form-sub-heading">
          {" "}
          D.Recent Annual Gross Income Range($ Equivalent, Tick Where
          Appropriate){" "}
        </h3>

        <Row>
          <Col md={4}>
            <Row>
              <Col md={8}>
                <FormLabel>1,200 - 3,600 $ | Equivalent</FormLabel>
              </Col>
              <Col md={4}>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="recent_gross_income"
                  value="1,200 - 3,600 $"
                />
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <Row>
              <Col md={8}>
                <FormLabel>8,401 - 14,400 $ | Equivalent</FormLabel>
              </Col>
              <Col md={4}>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="recent_gross_income"
                  value="8,401 - 14,400 $"
                />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={8}>
                <FormLabel>18,000 - 50,000 $ | Equivalent</FormLabel>
              </Col>
              <Col md={4}>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="recent_gross_income"
                  value="18,000 - 50,000 $"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Row>
              <Col md={8}>
                <FormLabel>3,601 - 8,400 $ | Equivalent</FormLabel>
              </Col>
              <Col md={4}>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="recent_gross_income"
                  value="3,601 - 8,400 $ "
                />
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <Row>
              <Col md={8}>
                <FormLabel>14,401 - 18,000 $ | Equivalent</FormLabel>
              </Col>
              <Col md={4}>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="recent_gross_income"
                  value="14,401 - 18,000 $"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <NavLink
          to={`${props.path}/add-banking-details`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
        <NavLink
          to={`${props.path}/add-next-of-kin`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>
    </>
  );
};

export default ProfessionalBackground;
