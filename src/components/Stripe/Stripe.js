import React from "react";
import StoreMainDataContext from "../../contexts/storeMainData";

import Classes from "./Stripe.module.css";

export default function Stripe() {
  let storeMainData = React.useContext(StoreMainDataContext);

  if (storeMainData.body === undefined) {
    return (
      <div className={Classes.Stripe}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    const stripeData = Object.values(storeMainData.body).filter((item) => item.__component === "ui-components.stripe")[0];
    return (
      <div className={Classes.Stripe} style={{ backgroundColor: stripeData.backgroundColor.color }}>
        <div className="container">
          <h1>{stripeData.title}</h1>
        </div>
      </div>
    );
  }
}
