import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./menu-item.style.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  imageSize,
  history,
  linkUrl,
  match,
}) => {
  return (
    <>
      <Col
        md={`${size ? "6 adjust-image" : "4"}`}
        // className={`mb-4 ${imageSize ? "adjust-image" : ""}`}
        className="mb-4"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <Card className="h-100">
          <div className="oveflow-hidden">
            <Card.Img variant="top" src={imageUrl} />
          </div>

          <Card.Body>
            <Card.Title>{title.toUpperCase()}</Card.Title>
            <Button variant="primary">Shop Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default withRouter(MenuItem);
