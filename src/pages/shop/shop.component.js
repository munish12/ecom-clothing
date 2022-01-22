import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { CollectionPreview } from "../../components/collection-preview/collection-preview-component";
import "../shop/shop.component.scss";
import SHOP_DATA from "./shop.data";

export default class shopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
     <Container fluid className="shop-page py-5">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
     </Container>
    );
  }
}
