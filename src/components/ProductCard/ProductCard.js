import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import Classes from "./ProductCard.module.css";

let components = {
  AiFillCar: AiFillCar,
};

export default function ProductCard({ id, title, subtitle, productId, icon, backgroundColor, type }) {
  let TagName = components[icon];

  return (
    <div className={Classes.ProductCard}>
      <div className={Classes.ProductCardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={Classes.ProductCardBody} style={{ backgroundColor: backgroundColor }}>
        <TagName className={Classes.Icon} />
      </div>
      <div className={Classes.ProductCardFooter}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
