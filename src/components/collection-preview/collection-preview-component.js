import React from "react";
import { Row, Col } from "react-bootstrap";
import "./collection-preview.styles.scss";
import { CollectionItem } from "../collection-item/collection-item-component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <>
      <Row className="collection-preview mb-2">
        <Col xs={12}>
          <h1 className="title">{title}</h1>
        </Col>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...OtherItemProps }) => (
            <CollectionItem key={id} {...OtherItemProps} />
          ))}
      </Row>
    </>
  );
};
