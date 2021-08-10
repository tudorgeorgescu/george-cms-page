import React from "react";

import Classes from "./FeaturedProductCard.module.css";

export default function FeaturedProductCard({ id, title, subtitle, productId, icon, backgroundColor, type, productImage }) {
  return (
    <div className={Classes.FeaturedProductCard} style={{ backgroundColor: backgroundColor }}>
      <div className={Classes.FeaturedProductCardBody} style={{ backgroundColor: backgroundColor }}>
        <img src={`http://46.101.236.251:1337${productImage.url}`} alt={productImage.alternativeText} />
      </div>
      <div className={Classes.FeaturedProductCardFooter}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
