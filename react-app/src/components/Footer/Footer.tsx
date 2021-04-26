import React from "react";
import s from "./Footer.module.css";
import socialsSprite from "../../assets/images/svg/socialsSprite.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__inner}>
        <div className={s.footer__links}>
          <a href="#3" className={s.footer__link}>
            Главная
          </a>
          <a href="#3" className={s.footer__link}>
            Города
          </a>
          <a href="#3" className={s.footer__link}>
            Лайфхаки
          </a>
          <a href="#3" className={s.footer__link}>
            Блог
          </a>
          <a href="#3" className={s.footer__link}>
            О нас
          </a>
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
