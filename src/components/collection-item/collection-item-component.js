import React from "react";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./collection-item.styles.scss";

export const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Col lg={3} md={6} className="mb-4">
      <div className="collection-item">
        <div
          className="image"
          // style={{
          //   backgroundImage: `url(${imageUrl})`,
          // }}
        >
          <Image src={imageUrl} alt={name} />
        </div>
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </Col>
  );
};
