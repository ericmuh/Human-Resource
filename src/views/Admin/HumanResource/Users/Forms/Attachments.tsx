import * as React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../../../../../components/FormField/FormField";

const AttachmentSchema = Yup.object().shape({
  domain_title: Yup.string()
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
  domain_title: "",
  description: "",
  milestones: [
    {
      cost: "",
      duration: "",
      indicator: "",
    },
  ],
};

const Attachment = (props: any) => {
  return (
    <>
      <h3 className="form-sub-heading"> Document CheckList </h3>

      <FormGroup>
        <Row>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="original_ids"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  Original National/Passpot IDs
                </FormLabel>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="certificate_copies"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  Certificate Copies Obtained
                </FormLabel>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <FormControl
              as={FormControl}
              type="file"
              
              multiple
              name="attachments"
              className="multiple"
              onChange={(event: any) => {
                props.setFieldValue("attachments", event.target.files[0]);
              }}
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="ids_copies"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  Copies of National/Passport IDs Obtained
                </FormLabel>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="contract_copy"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  Signed Contract Copy Obtained
                </FormLabel>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="copy_cv"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">Signed Copy of CV</FormLabel>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="all_details"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  All the details completed and signed
                </FormLabel>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col md={5}>
            <Row>
              <Col md={2}>
                <FormField
                  as={FormControl}
                  
                  type="checkbox"
                  name="details_checklist"
                  value="copies_certificates"
                />
              </Col>
              <Col md={10}>
                <FormLabel className="left">
                  Original Copies of Cerificates Sighted
                </FormLabel>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      {/* =================OIC HR Manager ============ */}
      <FormGroup>
        <h3 className="form-sub-heading">OIC HR Manager</h3>

        <Row>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <FormLabel className="left">Name</FormLabel>
              </Col>
              <Col md={10}>
                <FormField
                  as={FormControl}
                  
                  type="text"
                  name="hr_manager"
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <FormLabel className="left">Date</FormLabel>
              </Col>
              <Col md={10}>
                <FormField as={FormControl}  type="text" name="date" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col md={2}>
            <FormField
              as={FormControl}
              
              type="checkbox"
              name="details_checklist"
              value="accepted"
            />
          </Col>
          <Col md={10}>
            I confirm that I have checked all the details and the relevant
            copies attached
            <br />I confirm acceptance of an oath staff member of company
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <FormField type="submit"
        value="Save"
        as={FormControl}
        name="submit"
          className="submit-btn  sub-btn-right"
       />
        <NavLink
          to={`${props.path}/add-contact-info`}
          className="submit-btn  sub-btn-right mx-2"
        >
          {" "}
          Previous
        </NavLink>
      </FormGroup>
    </>
  );
};

export default Attachment;
