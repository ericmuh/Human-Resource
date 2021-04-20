import { Field, FieldArray } from "formik";
import * as React from "react";
import {
  Button,
  Col,

  FormControl,
  FormLabel,
  Row
} from "react-bootstrap";
import FormField from "../../../../components/FormField/FormField";
import SearchSelect from "../../../../components/SearchSelect/SearchSelect";
import { getData } from "../../../../context/actions/actions";
import {
  GET_VENDOR_OPTIONS
} from "../../../../context/actions/actionTypes";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";

const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  supplies: [
    {
      name: "",
      units: "",
      value: "",
      vendor: "",
    },
  ],
};
const ProjectSupply = (props: any) => {
  const { projects, dispatch } = React.useContext(ProjectContext);
  const { operations, dispatch: operationsDispatch } = React.useContext(
    OperationContext
  );

  React.useEffect(() => {
    // GET VENDORS
    getData({
      dispatch: operationsDispatch,
      url: "operations/vendors",
      options_type: GET_VENDOR_OPTIONS,
    });
  }, []);

  return (
    <>
      <FieldArray name="supplies">
        {({ insert, remove, push }) => (
          <>
            {props.values.supplies.length > 0 &&
              props.values.supplies.map((supply: any, key: number) => (
                <React.Fragment key={key}>
                  <Row key={key}>
                    <Col md={2}>
                      <FormLabel>Supply Name</FormLabel>
                    </Col>
                    <Col md={10}>
                      <FormField
                        as={FormControl}
                        type="text"
                        name={`supplies.${key}.name`}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Units</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            as={FormControl}
                            type="number"
                            name={`supplies.${key}.units`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Value</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            name={`supplies.${key}.value`}
                            as={FormControl}
                            type="number"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2}>
                      <FormLabel>Vendor | Source</FormLabel>
                    </Col>
                    <Col md={10}>
                      <SearchSelect
                        options={operations.vendors}
                        setFieldValue={props.setFieldValue}
                        name={`supplies.${key}.vendor`}
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
                <Field
                  as={FormControl}
                  type="button"
                  value="Add Another Supply"
                  name="add supply"
                  className="form-control submit-btn"
                  onClick={() =>
                    push({
                      name: "",
                      units: "",
                      value: "",
                      vendor: "",
                    })
                  }
                />
              </Col>
            </Row>
          </>
        )}
      </FieldArray>
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

export default ProjectSupply;
