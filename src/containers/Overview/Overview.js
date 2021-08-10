import React from "react";
import StoreMainDataContext from "../../contexts/storeMainData";
import FeaturedProductCard from "../../components/FeaturedProductCard/FeaturedProductCard";
import OverviewCardCollection from "../OverviewCardCollection/OverviewCardCollection";
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
    const featuredProductCardData = Object.values(storeMainData.body).filter((item) => item.__component === "ui-components.product-card")[0];
    const overviewCardCollectionData = Object.values(storeMainData.body).filter((item) => item.__component === "ui-components.product-card-collection");

    return (
      <div className={Classes.Overview}>
        {/* Feature product card */}
        <FeaturedProductCard icon={featuredProductCardData.product.icon} title={featuredProductCardData.product.title} subtitle={featuredProductCardData.product.subtitle} backgroundColor={featuredProductCardData.backgroundColor.color} productImage={featuredProductCardData.product.productImage} />
        {/* Card collections */}
        {overviewCardCollectionData.map((cardCollection) => (
          <OverviewCardCollection title={cardCollection.grouping.name} id={cardCollection.grouping.id} key={cardCollection.grouping.id} cardsBgColor={cardCollection.backgroundColor.color} />
        ))}
      </div>
    );
  }
}
