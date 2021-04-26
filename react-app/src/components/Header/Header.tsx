import React from "react";
import s from "./Header.module.css";
import moonSVG from "../../assets/images/svg/moon.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__burger}>
          <button className={s.burger}>
            <span></span>
          </button>
        </div>
        <div className={s.dropDown__menu}>
          <a href="#3" className={s.dropDown__menu__link}>
            Главная
          </a>
          <a href="#3" className={s.dropDown__menu__link}>
            Города
          </a>
          <a href="#3" className={s.dropDown__menu__link}>
            Лайфхаки
          </a>
          <a href="#3" className={s.dropDown__menu__link}>
            Блог
          </a>
          <a href="#3" className={s.dropDown__menu__link}>
            О нас
          </a>
        </div>
        <nav className={s.av}>
          <a href="#3" className={`${s.nav__link} ${s.active}`}>
            Главная
          </a>
          <a href="#3" className={s.nav__link}>
            Города
          </a>
          <a href="#3" className={s.nav__link}>
            Лайфхаки
          </a>
          <a href="#3" className={s.nav__link}>
            Блог
          </a>
          <a href="#3" className={s.nav__link}>
            О нас
          </a>
        </nav>
        <div className={s.light__mode}>
          <button className={s.light__mode__btn}>
            <svg className={s.moon}>
              <use xlinkHref={moonSVG + "#moon"}></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
