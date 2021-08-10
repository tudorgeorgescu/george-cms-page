import React from "react";
import { fetchCardCollection } from "../../utils/api";

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
        <div className="container">
          <h3 className="collectionTitle">{title}</h3>
        </div>
      </div>
    );
  }
}
