import * as React from "react";
import { FormControl } from "react-bootstrap";
import { Field } from "formik";

const FormField = (props: any) => (
  <>
    <Field {...props} />
    {props.errors && props.touched ? (
      <FormControl.Feedback type="invalid">
        {props.errors.name}
      </FormControl.Feedback>
    ) : null}
  </>
);

export default FormField;
