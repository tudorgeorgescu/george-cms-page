import React from "react";
import { StoreMainDataConsumer } from "../../contexts/storeMainData";
import CardGroupDataMock from "../../data/groupings.json";
import { fetchCardGroupData } from "../../utils/api";

import ProductCard from "../../components/ProductCard/ProductCard";
import PluginCard from "../../components/PluginCard/PluginCard";

import Classes from "./OverviewCardGroup.module.css";

export default function OverviewCardGroup({ id, groupingId }) {
  let storeMainData = React.useContext(StoreMainDataConsumer);
  const [cardGroupData, setCardGroupData] = React.useState();

  React.useEffect(() => {
    fetchCardGroupData(groupingId)
      .then((data) => setCardGroupData(data))
      .catch(({ message }) => {
        console.log(message);
        setCardGroupData(Object.values(CardGroupDataMock).filter((item) => item.id === groupingId));
      });
  }, []);

  if (cardGroupData === undefined) {
    return (
      <div className={Classes.OverviewCardGroup}>
        <p>Loading...</p>
      </div>
    );
  } else {
    const CardGroup = Object.values(storeMainData).filter((item) => item.id === id)[0];
    console.log(CardGroup);
    console.log("Card group data");
    console.log(cardGroupData);
    const groupCardBackgroundColor = CardGroup.backgroundColor.color;
    const groupCardType = CardGroup.cardType.cardTypes;
    const groupingId = CardGroup.grouping.id;
    const groupTitle = CardGroup.title.label;
    const groupActionTitle = CardGroup.title.actionTitle;
    const groupActionTarget = CardGroup.title.actionTarget;
    return (
      <div className={Classes.OverviewCardGroup}>
        <h4 className={Classes.GroupTitle}>{groupTitle}</h4>
        {/* <div className={Classes.Cards}>
          {CardGroupData.products.map((item) => (
            <ProductCard id={item.id} key={item.id} cardsBgColor={cardsBgColor} title={item.title} icon={item.icon} />
          ))}
        </div> */}
        <p>collection</p>
      </div>
    );
  }
}
