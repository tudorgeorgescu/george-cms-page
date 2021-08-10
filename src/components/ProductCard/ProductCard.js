import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { SiProducthunt } from "react-icons/si";
import { BsGift } from "react-icons/bs";
import { MdWallpaper } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";

import Classes from "./ProductCard.module.css";

let icons = {
  AiFillCar,
  FaRegSave,
  FaCcMastercard,
  FaCreditCard,
  BsCreditCard,
  SiProducthunt,
  BsGift,
  MdWallpaper,
  FaMoneyBillWaveAlt,
  FaCcVisa,
  FaRegFileArchive,
  CgUnavailable
};

export default function ProductCard({ id, title, subtitle, productId, icon, backgroundColor, type }) {
  let TagName = icons[icon] ? icons[icon] : CgUnavailable;

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
