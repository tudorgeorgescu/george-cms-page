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

import Classes from "./FeaturedProductCard.module.css";

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
  CgUnavailable,
};

export default function FeaturedProductCard({ id, title, subtitle, productId, icon, backgroundColor, type, productImage }) {
  let TagName = icons[icon] ? icons[icon] : CgUnavailable;

  return (
    <div className={Classes.FeaturedProductCard}>
      <div className={Classes.FeaturedProductCardBody} style={{ backgroundColor: backgroundColor }}>
        {/*         <TagName className={Classes.Icon} /> */}
        <img src={`http://46.101.236.251:1337${productImage.url}`} alt={productImage.alternativeText} />
      </div>
      <div className={Classes.FeaturedProductCardFooter}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
