import React from "react";
import Button from "react-bootstrap/Button";
import "./custom-button-styles.scss";

export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <>
      <Button {...otherProps}>{children}</Button>
    </>
  );
};
