import React from "react";
import s from "./Header.module.css";
import moonSVG from "../../assets/images/svg/moon.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/main" className={s.dropDown__menu__link}>
            Главная
          </NavLink>
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
          <NavLink
            to="/main"
            className={s.nav__link}
            activeClassName={s.active}
          >
            Главная
          </NavLink>
          <NavLink
            to="/cities"
            className={s.nav__link}
            activeClassName={s.active}
          >
            Города
          </NavLink>
          <NavLink
            to="/lifehaks"
            className={s.nav__link}
            activeClassName={s.active}
          >
            Лайфхаки
          </NavLink>
          <NavLink
            to="/blogMenu"
            className={s.nav__link}
            activeClassName={s.active}
          >
            Блог
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={s.nav__link}
            activeClassName={s.active}
          >
            О нас
          </NavLink>
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
