import React from "react";
import s from "./CityPage.module.css";

const CityPage = () => {
  return (
    <>
      <section className={s.intro}>
        <div className={s.intro__inner}>
          <div className={s.city__discription}>
            <h1 className={s.city__discription__title}>Варшава -</h1>
            <p className={s.city__discription__text}>
              столица Польши, архитектура которой отражает долгую и сложную
              историю города. Здесь можно увидеть готические церкви и
              неоклассические дворцы, типовые дома советского периода и
              современные небоскребы.
            </p>
          </div>
          <div className={s.city__attractions__links}>
            <a href="#3" className={s.city__attractions__link}>
              Достопримечательности
            </a>
            <a href="#3" className={s.city__attractions__link}>
              Музеи
            </a>
            <a href="#3" className={s.city__attractions__link}>
              Развлечения
            </a>
            <a href="#3" className={s.city__attractions__link}>
              Рестораны & Кафе
            </a>
          </div>
        </div>
      </section>
      <section className={s.attractions}>
        <div className={s.container}>
          <div className={s.attractions__inner}>
            <div className={s.breadcrumb__wrapper}>
              <ul className={s.breadcrumb}>
                <li className={s.breadcrumbItem}>
                  <a className={s.breadcrumbLink} href="3">
                    Главная
                  </a>
                </li>
                <li className={s.breadcrumbItem}>
                  <a className={s.breadcrumbLink} href="3">
                    Города
                  </a>
                </li>
                <li className={`${s.breadcrumbItem} ${s.active}`}>Варшава</li>
              </ul>
            </div>
            <ul className={s.attractions__list}>
              <li className={s.attractions__list__item}>
                <p className={s.attraction__title}>
                  Достопримечательности <span className={s.triangle}></span>
                </p>
                <p className={s.attraction__subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className={s.attraction__card__list}>
                  <li className={s.attraction__card__list__item}>
                    <a href="3" className={s.attraction__card__hover}>
                      <h4 className={s.attraction__card__hover__title}>
                        Дворцовая площадь Варшавы
                      </h4>
                    </a>
                    <a href="3" className={s.attraction__card}>
                      <div className={s.attraction__card__img}>
                        <img
                          src="../../assets/images/cities/warsawa/attractions/Warsaw-Palace-Square.jpg"
                          alt=""
                        />
                      </div>
                      <div className={s.attraction__card__content}>
                        <h4 className={s.attraction__card__title}>
                          Дворцовая площадь Варшавы
                        </h4>
                        <p className={s.attraction__card__text}>
                          Пожалуй, одна из самых красивых площадей Варшавы.
                          Вдоль ее восточной стороны протянулся Королевский
                          замок, выстроенный в начале 17 века на месте
                          деревянной крепости 14 века.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;
