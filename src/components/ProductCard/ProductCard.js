import React from "react";

import { getIconComponent } from "../../utils/getIconComponent";
import CSS_COLOR_NAMES from "../../utils/cssColorNames";

import Classes from "./ProductCard.module.css";

export default function ProductCard({ title, icon, id, cardsBgColor, iconColor = "white" }) {
  let cssColors = CSS_COLOR_NAMES.map((color) => color.toLowerCase());
  let background = cssColors.includes(cardsBgColor.toLowerCase()) ? cardsBgColor : "goldenrod";
  let color = cssColors.includes(iconColor.toLowerCase()) ? iconColor : "white";

  return (
    <div className={Classes.ProductCardWrapper}>
      <div className={Classes.ProductCard} style={{ backgroundColor: `${background}` }}>
        <div className={Classes.Icon}>{getIconComponent({ icon: icon, color: `${color}`, fontSize: "3rem", alignSelf: "left" })}</div>
        <p className={Classes.InnerTitle}>{title}</p>
      </div>
      <p className={Classes.OuterTitle}>{title}</p>
    </div>
  );
}
