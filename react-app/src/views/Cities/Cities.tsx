import React from "react";
import s from "./Cities.module.css";

const Cities = () => {
  return (
    <section className={s.intro}>
      <div className={s.container}>
        <div className={s.intro__inner}>
          <h3 className={s.intro__subtitle}>
            Выберете город о котором хотите узнать
          </h3>
          <input
            placeholder="Название города"
            type="text"
            className={s.intro__search}
          />
          <button className={s.intro__btn}>Найти</button>
        </div>
      </div>
    </section>
  );
};

export default Cities;
