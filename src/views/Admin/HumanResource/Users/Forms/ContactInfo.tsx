import { Field } from "formik";
import * as React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FormField from "../../../../../components/FormField/FormField";



const ContactInfo = (props: any) => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Department/Unit Posted</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="department" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Designation</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="designation" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Date of Admission</FormLabel>
              </Col>
              <Col md={8}>
                <FormField
                  name="date_of_admission"
                  as={FormControl}
                  type="text"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Contracted Period</FormLabel>
              </Col>
              <Col md={8}>
                <FormField
                  name="contracted_period"
                  as={FormControl}
                  type="text"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> ID No.</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="id_number" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={4}>
                <FormLabel> Supervisor Name</FormLabel>
              </Col>
              <Col md={8}>
                <FormField name="supervisor" as={FormControl} type="text" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <h3 className="form-sub-heading">
          {" "}
          D. Annual Income Range($ Equivalent, Tick Where Appropriate){" "}
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
          to={`${props.path}/add-attachments`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
        <NavLink
          to={`${props.path}/add-declaration`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>
    </>
  );
};

export default ContactInfo;
