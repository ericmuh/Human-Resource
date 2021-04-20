import * as React from "react";

const CustomCheckbox:React.FC  = (props:any) => {
  const [is_checked, setIs_Checked] = React.useState(props.isChecked ? true : false);

  const handleClick = () => {
    setIs_Checked(!is_checked);
  };

  const { isChecked, number, label, inline, ...rest } = props;
  const classes =
    inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
  return (
    <div className={classes}>
      <input
        id={number}
        type="checkbox"
        onChange={handleClick}
        checked={is_checked}
        {...rest}
      />
      <label htmlFor={number}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
