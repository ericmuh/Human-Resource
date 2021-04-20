import { Form, Formik } from "formik";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import BasicData from "./Forms/BasicData";
import FormNav from "./_partials/_FormNav";
import * as Yup from "yup";
import {
  string_optional,
  string_required,
  email_optional,
} from "../../../../common/yup_validation";
import { saveToLocalStorage } from "../../../../Utils/LocalStorage";
import NextOfKin from "./Forms/NextOfKin";
import ProfessionalBackground from "./Forms/ProfessionalBackground";
import BankingDetails from "./Forms/BankingDetails";
import Declaration from "./Forms/Declaration";
import ContactInfo from "./Forms/ContactInfo";
import Attachment from "./Forms/Attachments";


const BasicDataSchema = Yup.object().shape({
  first_name: string_required,
  middle_name: string_optional,
  last_name: string_required,
  village: string_required,
  block_of_residence: string_optional,
  county: string_optional,
  telephone: string_required,
  date_of_birth: string_optional,
  nationality: string_optional,
  marital_status: string_optional,
  sub_county: string_optional,
  district: string_optional,
  mobile: string_optional,
  national_id: string_optional,
  email: email_optional,
  id_photo: string_optional,
});

const initialValues = {
  // Basic Data
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  village: "",
  block_of_residence: "",
  county: "",
  telephone: "",
  date_of_birth: "",
  nationality: "",
  marital_status: "",
  sub_county: "",
  district: "",
  mobile: "",
  national_id: "",
  email: "",
  id_photo: "",

  // Next of Kin

  kin_name: "",
  kin_gender: "",
  kin_nationality: "",
  kin_relationship: "",
  kin_village: "",
  kin_sub_county: "",
  kin_country: "",
  kin_district: "",
  kin_telephone: "",
  kin_mobile: "",
  kin_email: "",

  // Professional Background

  proffession_name: "",
  recent_gross_income: "",
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
  // Accounts

  accounts: [
    {
      bank_name: "",
      bank_branch: "",
      account_name: "",
      account_number: "",
      currency: "",
      swift_code: "",
    },
  ],
  // Declaration
  declaration_name: "",
  declaration_date: "",
  declaration_accepted: "",
};

const UserForms = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="content ">
      <Container fluid>
        <FormNav url={url} />
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      actions.setSubmitting(true);
                      // SUBMIT DATA

                      saveToLocalStorage({ name: "users", values });

                      actions.setSubmitting(false);
                      props.history.push("/human-resource/users");
                    }}
                  >
                    {({ values, errors, touched, setFieldValue }) => (
                      <Form className="sub-form">
                        <Switch>
                          <Redirect
                            from={path}
                            exact
                            to={`${path}/add-basic-data`}
                          />
                          <Route path={`${path}/add-basic-data`}>
                            <BasicData values={values} setFieldValue={setFieldValue} path={path} />
                          </Route>
                          <Route path={`${path}/add-next-of-kin`}>
                            <NextOfKin values={values}  path={path}/>
                          </Route>
                          <Route path={`${path}/add-professional-background`}>
                            <ProfessionalBackground values={values} path={path}/>
                          </Route>
                          <Route path={`${path}/add-banking-details`}>
                            <BankingDetails values={values} path={path} />
                          </Route>
                          <Route path={`${path}/add-declaration`}>
                            <Declaration values={values} path={path} />
                          </Route>
                          <Route path={`${path}/add-contact-info`}>
                            <ContactInfo  values={values} path={path}/>
                          </Route>
                          <Route path={`${path}/add-attachments`}>
                            <Attachment values={values} setFieldValue={setFieldValue} path={path} />
                          </Route>
                        </Switch>
                      </Form>
                    )}
                  </Formik>
                </>
              }
            />
          </Col>
        </Row>
        {}
      </Container>
    </div>
  );
};

export default UserForms;
