import { Form, Formik } from "formik";
import * as React from "react";
import { Col, FormControl, FormLabel, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../../../../../components/FormField/FormField";

const BDataSchema = Yup.object().shape({});

const initialValues = {
  name: "",
};
const Appraisals = (props: any) => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div></div>
    </>
  );
};

export default Appraisals;
