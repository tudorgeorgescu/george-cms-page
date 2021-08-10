import React from "react";
import { fetchCardCollection } from "../../utils/api";

import ProductCard from "../../components/ProductCard/ProductCard";
import Classes from "./OverviewCardCollection.module.css";

export default function OverviewCardCollection({ id, title, cardsBgColor }) {
  const [cardCollectionData, setCardCollectionData] = React.useState();

  React.useEffect(() => {
    fetchCardCollection(id)
      .then((data) => setCardCollectionData(data))
      .catch(({ message }) => console.log(message));
  }, []);

  if (cardCollectionData === undefined) {
    return (
      <div className={Classes.OverviewCardCollection}>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className={Classes.OverviewCardCollection}>
        <h3 className={Classes.Title}>{title}</h3>
        <div className={Classes.Cards}>
          {cardCollectionData.products.map((item) => (
            <ProductCard id={item.id} key={item.id} cardsBgColor={cardsBgColor} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    );
  }
}
