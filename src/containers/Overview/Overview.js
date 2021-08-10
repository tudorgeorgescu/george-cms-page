import React from "react";
import StoreMainDataContext from "../../contexts/storeMainData";
import ProductCard from "../../components/ProductCard/ProductCard";

import Classes from "./Overview.module.css";

export default function Overview() {
  let storeMainData = React.useContext(StoreMainDataContext);

  if (storeMainData.body === undefined) {
    return (
      <div className={Classes.Overview}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const productCardData = Object.values(storeMainData.body).filter((item) => item.__component === "ui-components.product-card")[0];
    return (
      <div className={Classes.Overview}>
        <ProductCard icon={productCardData.product.icon} title={productCardData.product.title} subtitle={productCardData.product.subtitle} backgroundColor={productCardData.backgroundColor.color} />
      </div>
    );
  }
}
