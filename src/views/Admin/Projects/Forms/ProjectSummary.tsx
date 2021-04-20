import * as React from "react";
import { Field } from "formik";
import { Col, FormControl, FormLabel, Row } from "react-bootstrap";
import FormField from "../../../../components/FormField/FormField";
import SearchSelect from "../../../../components/SearchSelect/SearchSelect";
import { getData } from "../../../../context/actions/actions";
import {
  GET_DONOR_OPTIONS,
  GET_LOCATION_OPTIONS,
} from "../../../../context/actions/actionTypes";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";
import { ProgramContext } from "../../../../context/contexts/Programs/Program";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  name: "",
  program: "",
  donor: "",
  location: "",
  amount: "",
  overral_strategy: "",
  start_date: "",
  end_date: "",
  donor_agreement: "",
};
const ProjectSummary = (props: any) => {
  const { projects, dispatch } = React.useContext(ProjectContext);

  const { operations, dispatch: operationsDispatch } = React.useContext(
    OperationContext
  );

  const { programs, dispatch: programsDispatch } = React.useContext(
    ProgramContext
  );

  React.useEffect(() => {
    // GET LOCATIONS
    getData({
      dispatch: operationsDispatch,
      url: "operations/locations",
      options_type: GET_LOCATION_OPTIONS,
    });
    // GET DONORS
    getData({
      dispatch: operationsDispatch,
      url: "operations/donors",
      options_type: GET_DONOR_OPTIONS,
    });
  }, []);
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Project Title</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="name" />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <FormLabel>Program</FormLabel>
        </Col>
        <Col md={10}>
          <SearchSelect
            options={operations.donors}
            setFieldValue={props.setFieldValue}
            name="program"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col md={4}>
              <FormLabel>Donor Name </FormLabel>
            </Col>
            <Col md={8}>
              <SearchSelect
                options={operations.donors}
                setFieldValue={props.setFieldValue}
                name="donor"
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col md={4}>
              <FormLabel>Project Locations</FormLabel>
            </Col>

            <Col md={8}>
              <SearchSelect
                options={operations.locations}
                setFieldValue={props.setFieldValue}
                name="location"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <FormLabel>Amount</FormLabel>
            </Col>
            <Col md={8}>
              <FormField as={FormControl} type="number" name="amount" />
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
                onFocus={(e: any) => (e.target.type = "date")}
                type="text"
                name="start_date"
              />
            </Col>
            <Col md={5}>
              <FormField
                as={FormControl}
                placeholder="End Date"
                onFocus={(e: any) => (e.target.type = "date")}
                type="text"
                name="end_date"
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
            name="overral_strategy"
          />
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <FormLabel>Stratery Plan</FormLabel>
        </Col>
        <Col md={10}>
          <FormControl
            as={FormControl}
            type="file"
            name="donor_agreement"
            onChange={(event: any) => {
              props.setFieldValue("donor_agreement", event.target.files[0]);
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
    </>
  );
};

export default ProjectSummary;
