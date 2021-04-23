import React from "react";
import s from "./Main.module.css";

const Main = () => {
  return (
    <>
      <section className={s.intro}>
        <div className={s.container}>
          <div className={s.intro__inner}>
            <h1 className={s.intro__title}>
              D&N <br />
              Travel
            </h1>
            <h3 className={s.intro__subtitle}>
              Ваш путиводитель по городам со всего мира.
            </h3>
            <p className={s.intro__text}>
              Не упусти всё самое интересное из путешесвия!
            </p>
            <button className={s.intro__btn}>Поехали</button>
          </div>
        </div>
      </section>
      <section className={s.popularPlaces}>
        <div className={s.popularPlaces__inner}>
          <div className={s.popularPlaces__title}>
            <h2>Топ 5 популярных городов</h2>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Main;
