import React from "react";
import Stripe from "./components/Stripe";

const Components = {
  "ui-component.stripe": Stripe
};

export default block => {

  console.log(block);

  // component does exist
  if (typeof Components[block.__component] !== "undefined") {
    return React.createElement(Components[block.__component], {
      key: block._uid,
      block: block
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.__component} has not been created yet.</div>,
    { key: block.id }
  );
}
