import { Field, FieldArray } from "formik";
import * as React from "react";
import { Button, Col, FormControl, FormLabel, Row } from "react-bootstrap";
import * as Yup from "yup";
import FormField from "../../../../components/FormField/FormField";
import { ProjectContext } from "../../../../context/contexts/Projects/Project";

const ManagementApproachSchema = Yup.object().shape({
  activity: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
});
const initialValues = {
  id: "" + Math.floor(Math.random() * 1000),
  activity: "",
  description: "",
  milestones: [
    {
      cost: "",
      duration: "",
      indicator: "",
    },
  ],
};

const ProjectWorkPlan = (props: any) => {
  const { projects, dispatch } = React.useContext(ProjectContext);
  return (
    <>
      <Row>
        <Col md={2}>
          <FormLabel>Activity</FormLabel>
        </Col>
        <Col md={10}>
          <FormField as={FormControl} type="text" name="activity" />
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

      {/* FieldArray */}

      <FieldArray name="milestones">
        {({ insert, remove, push }) => (
          <>
            {props.values.milestones.length > 0 &&
              props.values.milestones.map((indicator: any, key: number) => (
                <React.Fragment key={key}>
                  <Row key={key}>
                    <Col md={4}>
                      <Row>
                        <Col md={6}>
                          <FormLabel>Milestone</FormLabel>
                        </Col>
                        <Col md={6}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`milestones.${key}.indicator`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row>
                        <Col md={4}>
                          <FormLabel>Target</FormLabel>
                        </Col>
                        <Col md={8}>
                          <FormField
                            as={FormControl}
                            type="text"
                            name={`milestones.${key}.duration`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Col md={6}>
                          <FormLabel>Cost</FormLabel>
                        </Col>
                        <Col md={6}>
                          <FormField
                            as={FormControl}
                            type="number"
                            name={`milestones.${key}.cost`}
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
                  value="Add Another Milestone"
                  name="add Milestones"
                  className="form-control submit-btn"
                  onClick={() =>
                    push({
                      cost: "",
                      duration: "",
                      indicator: "",
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
export default ProjectWorkPlan;
