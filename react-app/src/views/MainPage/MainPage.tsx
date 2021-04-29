import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PopularPlaceCard from "../../components/PopularPlaceCard/PopularPlaceCard";
import s from "./MainPage.module.css";

type CityType = {
  id: number;
  city: string;
  country: string;
  discription: string;
  backgroundCardImage: string;
};

type MainPagePropsType = {
  citiesState: Array<CityType>;
};

const MainPage = (props: MainPagePropsType) => {
  let popularPlaceCards = props.citiesState.map((s) => (
    <PopularPlaceCard
      key={s.id}
      city={s.city}
      country={s.country}
      backgroundCardImage={s.backgroundCardImage}
    />
  ));

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
          {popularPlaceCards}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
