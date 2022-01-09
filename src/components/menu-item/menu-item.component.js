import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./menu-item.style.scss";

export const MenuItem = ({ title, imageUrl, size, imageSize }) => {
  return (
    <>
      <Col
        md={`${size ? "6 adjust-image" : "4"}`}
        // className={`mb-4 ${imageSize ? "adjust-image" : ""}`}
        className="mb-4"
      >
        <Card className="h-100">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title.toUpperCase()}</Card.Title>
            <Button variant="primary">Shop Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
