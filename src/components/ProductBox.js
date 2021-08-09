import React from "react";

export default props => (
  <div className="productbox" key="{props.block.id}">
    <h1>Product Box</h1>
    <h2>{props.block.product.title}</h2>
  </div>
);
