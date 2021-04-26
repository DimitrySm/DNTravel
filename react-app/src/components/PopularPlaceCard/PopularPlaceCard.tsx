import React from "react";
import s from "./PopularPlaceCard.module.css";

const PopularPlaceCard = () => {
  return (
    <a href="3" className={s.popularPlaces__card}>
      <div className={s.card__country}>
        <p>Польша</p>
      </div>
      <div className={s.card__city}>
        <p>Варшава</p>
      </div>
      <div className={s.popularPlaces__bgColor}>
        <div className={s.card__city__hover}>
          <p>Варшава</p>
        </div>
      </div>
    </a>
  );
};

export default PopularPlaceCard;
