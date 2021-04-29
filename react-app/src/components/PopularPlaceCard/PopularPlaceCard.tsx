import React from "react";
import { NavLink } from "react-router-dom";
import s from "./PopularPlaceCard.module.css";

type PopularPlaceCardType = {
  city: string;
  country: string;
  backgroundCardImage: string;
};

const PopularPlaceCard = (props: PopularPlaceCardType) => {
  const backgroundCardImage = props.backgroundCardImage;

  return (
    <NavLink
      to="/city"
      className={s.popularPlaces__card}
      style={{ backgroundImage: `url(${backgroundCardImage})` }}
    >
      <div className={s.card__country}>
        <p>{props.country}</p>
      </div>
      <div className={s.card__city}>
        <p>{props.city}</p>
      </div>
      <div className={s.popularPlaces__bgColor}>
        <div className={s.card__city__hover}>
          <p>{props.city}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default PopularPlaceCard;
