import React from "react";
import s from "./Footer.module.css";
import socialsSprite from "../../assets/images/svg/socialsSprite.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__inner}>
        <div className={s.footer__links}>
          <NavLink to="/main" className={s.footer__link}>
            Главная
          </NavLink>
          <NavLink to="/cities" className={s.footer__link}>
            Города
          </NavLink>
          <NavLink to="/lifehaks" className={s.footer__link}>
            Лайфхаки
          </NavLink>
          <NavLink to="/blogMenu" className={s.footer__link}>
            Блог
          </NavLink>
          <NavLink to="/aboutUs" className={s.footer__link}>
            О нас
          </NavLink>
        </div>
        <div className={s.footer__social}>
          <div className={s.footer__social__wrapper}>
            <a href="3" className={s.footer__social__link}>
              <svg className={s.socialIcon}>
                <use xlinkHref={socialsSprite + "#instagram"}></use>
              </svg>
            </a>
          </div>
          <div className={s.footer__social__wrapper}>
            <a href="3" className={s.footer__social__link}>
              <svg className={s.socialIcon}>
                <use xlinkHref={socialsSprite + "#vk"}></use>
              </svg>
            </a>
          </div>
          <div className={s.footer__social__wrapper}>
            <a href="3" className={s.footer__social__link}>
              <svg className={s.socialIcon}>
                <use xlinkHref={socialsSprite + "#email"}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
