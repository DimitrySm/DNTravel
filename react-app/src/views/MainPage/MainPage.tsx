import React from "react";
import { NavLink } from "react-router-dom";
import PopularPlaceCard from "../../components/PopularPlaceCard/PopularPlaceCard";
import s from "./MainPage.module.css";

const MainPage = () => {
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
            <NavLink to="/cities" className={s.intro__btn}>
              Поехали
            </NavLink>
          </div>
        </div>
      </section>
      <section className={s.popularPlaces}>
        <div className={s.popularPlaces__inner}>
          <div className={s.popularPlaces__title}>
            <h2>Топ 5 популярных городов</h2>
          </div>
          <PopularPlaceCard />
        </div>
      </section>
    </>
  );
};

export default MainPage;
