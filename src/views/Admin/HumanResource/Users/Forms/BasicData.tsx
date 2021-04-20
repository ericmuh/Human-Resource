import { Field } from "formik";
import * as React from "react";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import placeholderface from "../../../../../assets/img/faces/placeholder.jpg";
import FormField from "../../../../../components/FormField/FormField";

const BasicData = (props: any) => {
  const [selectedFile, setSelectedFile] = React.useState("");
  const [preview, setPreview] = React.useState("");

  // create a preview as a side effect, whenever selected file is changed
  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(placeholderface);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(placeholderface);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <FormLabel className="left">First Name</FormLabel>

            <FormField as={FormControl} type="text" name="first_name" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Middle Name</FormLabel>

            <FormField as={FormControl} type="text" name="middle_name" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Last Name</FormLabel>

            <FormField as={FormControl} type="text" name="last_name" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">
              Village/Block of Residence Name
            </FormLabel>

            <FormField as={FormControl} type="text" name="village" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">County</FormLabel>

            <FormField as={FormControl} type="text" name="county" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Telephone </FormLabel>

            <FormField as={FormControl} type="text" name="telephone" />
          </FormGroup>
        </Col>
        {/* ======================================================================================================= */}
        <Col>
          <FormGroup>
            <Row>
              <Col>
                <FormLabel className="left">Date of Birth </FormLabel>

                <FormField
                  as={FormControl}
                  placeholder="Date of Birth"
                  onFocus={(e: any) => (e.target.type = "date")}
                  type="text"
                  name="date_of_birth"
                />
              </Col>

              <Col>
                <FormLabel className="left">Gender</FormLabel>

                <FormField
                  as="select"
                  type="select"
                  className="form-control"
                  
                  name="gender"
                >
                  <option value="Residential">Male</option>
                  <option value="Commercial">Female</option>
                  <option value="Industrial">Other</option>
                </FormField>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Nationality</FormLabel>

            <FormField as={FormControl} type="text" name="nationality" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Marital Status</FormLabel>
            <Row>
              <Col>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="marital_status"
                  value="Married"
                />
              </Col>
              <Col>
                <FormField
                  as={FormControl}
                  
                  type="radio"
                  name="marital_status"
                  value="Single"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Payam/Sub-country</FormLabel>

            <FormField as={FormControl} type="text" name="sub_county" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">State/District</FormLabel>

            <FormField as={FormControl} type="text" name="district" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">Mobile Number</FormLabel>

            <FormField as={FormControl} type="text" name="mobile" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Image src={preview} thumbnail />

            <FormControl
              as={FormControl}
              type="file"
              id="id-photo"
              
              name="id_photo"
              onChange={(event: any) => {
                props.setFieldValue("id_photo", event.target.files[0]);
                onSelectFile(event);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">National ID/passport#</FormLabel>

            <FormField as={FormControl} type="text" name="national_id" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="left">First Name</FormLabel>

            <FormField as={FormControl} type="text" name="email" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <NavLink
          to={`${props.path}/add-next-of-kin`}
          className="submit-btn  sub-btn-right"
        >
          Next
        </NavLink>
      
      </FormGroup>

    </>
  );
};

export default BasicData;
