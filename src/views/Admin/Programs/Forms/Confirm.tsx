import * as React from "react";
import { Field, FormikContext, useFormikContext } from "formik";
import { FormControl } from "react-bootstrap";
import Card from "../../../../components/Card/Card";

const Confirm = (props: any) => {
  const { values } = useFormikContext<any>();
  console.log(values);
  return (
    <>
      <h3 className="sub-heading"> Program Summary </h3>
      <Card
        plain
        content={
          <>
            <p>
              Title: <span className="text-muted">{values.summary_title}</span>
            </p>
            <p>
              Country :
              <span className="text-muted">{values.summary_country}</span>
            </p>
            <p>
              Description :
              <span className="text-muted">{values.summary_description}</span>
            </p>
          </>
        }
      />

      <Field
        as={FormControl}
        type="submit"
        name="save"
        className="btn btn-primary"
        value="Confirm and Send Data"
      />
    </>
  );
};

export default Confirm;
