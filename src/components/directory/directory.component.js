import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "1",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "1",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Row className="mt-4">
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </Row>
      </>
    );
  }
}
