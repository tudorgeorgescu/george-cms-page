import React from "react";

export default props => (
  <div id="stripe" key="{props.block.id}">
    Hi I'm a Stripe component with the headline:
    <h2>{props.block.id}</h2>
  </div>
);
