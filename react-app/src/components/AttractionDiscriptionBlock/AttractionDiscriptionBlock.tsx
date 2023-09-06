import React from "react";
import s from "./AttractionDiscriptionBlock.module.css";

const AttractionDiscriptionBlock = () => {
  return (
    <div className={s.attraction__discriptionBlock}>
      <div className={s.discriptionBlock__content}>
        <h3 className={s.content__title}>Lorem</h3>
        <p className={s.content__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          omnis pariatur ipsa suscipit perferendis doloribus consequuntur nobis
          deserunt quia! Deserunt quisquam ullam voluptatem facere debitis!
          lorem100
        </p>
      </div>
      <div className={s.discriptionBlock__imgWrapper}>
        <img
          src="../../assets/images/cities/warsawa/attractions/Warsaw-Palace-Square-3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AttractionDiscriptionBlock;
