import React from "react";
import s from "./Header.module.css";
import moonSVG from "../../assets/images/svg/moon.svg";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  onClick: () => void;
  closedHeaderMenu: boolean;
};

const Header = (props: HeaderPropsType) => {
  const dropDownMenu = `${s.dropDown__menu} ${
    props.closedHeaderMenu === false ? s.active : ""
  }`;
  const burger = `${s.burger} ${props.closedHeaderMenu === false ? s.on : ""}`;

  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__burger}>
          <button className={burger} onClick={props.onClick}>
            <span></span>
          </button>
        </div>
        <div className={dropDownMenu} onClick={props.onClick}>
          <NavLink to="/main" className={s.dropDown__menu__link}>
            Главная
          </NavLink>
          <NavLink to="/cities" className={s.dropDown__menu__link}>
            Города
          </NavLink>
          <NavLink to="/lifehaks" className={s.dropDown__menu__link}>
            Лайфхаки
          </NavLink>
          <NavLink to="/blogMenu" className={s.dropDown__menu__link}>
            Блог
          </NavLink>
          <NavLink to="/aboutUs" className={s.dropDown__menu__link}>
            О нас
          </NavLink>
        </div>
        <nav className={s.nav}>
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
