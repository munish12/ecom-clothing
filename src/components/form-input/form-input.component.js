import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const FormInput = ({ handleChange,label, ...otherProps }) => {
  return (
    <>
      <FloatingLabel className="mb-3" label={label}>
        <Form.Control onChange={handleChange} {...otherProps} />
        {/* {label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
         : null} */}
      </FloatingLabel>
    </>
  );
};
