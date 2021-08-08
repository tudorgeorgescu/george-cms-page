import React from "react";

export default props => (
  <div className="Stripe">
    <hr />
    Hi I'm a Stripe component with the headline:
    <h2>{props.block.id}</h2>
  </div>
);
