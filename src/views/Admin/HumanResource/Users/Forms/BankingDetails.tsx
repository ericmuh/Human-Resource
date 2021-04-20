import * as React from "react";
import { Field, FieldArray } from "formik";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import FormField from "../../../../../components/FormField/FormField";
import { NavLink } from "react-router-dom";

const BankingDetails = (props: any) => {
  return (
    <>
      <FieldArray name="accounts">
        {({ insert, remove, push }) => (
          <>
            {props.values.accounts.length > 0 &&
              props.values.accounts.map((account: any, key: number) => (
                <React.Fragment key={key}>
                  <FormGroup>
                    <Row>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Name of Bank</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              as={FormControl}
                              type="text"
                              
                              name={`accounts.${key}.bank_name`}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Bank Branch</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              name={`accounts.${key}.bank_branch`}
                              as={FormControl}
                              type="text"
                              
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Account Name</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              as={FormControl}
                              type="text"
                              
                              name={`accounts.${key}.account_name`}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Account Number</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              as={FormControl}
                              type="text"
                              
                              name={`accounts.${key}.account_number`}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Currency</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              name={`accounts.${key}.currency`}
                              as={FormControl}
                              type="text"
                              
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Col md={4}>
                            <FormLabel>Swift Code</FormLabel>
                          </Col>
                          <Col md={8}>
                            <FormField
                              as={FormControl}
                              type="text"
                              
                              name={`accounts.${key}.swift_code`}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </FormGroup>
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
                <Field
                  as={FormControl}
                  type="button"
                  value="Add Another Bank Account"
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
      <FormGroup>
        <NavLink
          to={`${props.path}/add-declaration`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
        <NavLink
          to={`${props.path}/add-professional-background`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>
    </>
  );
};

export default BankingDetails;
