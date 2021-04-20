import * as React from "react";
import { useField } from "formik";
import Select from "react-select";

const SearchSelect = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <Select
      name={field.name}
      value={
        props.options
          ? props.options.find((option: any) => option.value === field.value)
          : ""
      }
      onChange={(option: any) => props.setFieldValue(field.name, option.value)}
      options={props.options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#0077B6",
          primary: "#0077B6",
          neutral10: "#0077B6",
        },
      })}
    />
  );
};

export default SearchSelect;
