import React from "react";
import s from "./AboutUsPage.module.css";
import socialsSprite from "../../assets/images/svg/socialsSprite.svg";

const AboutUsPage = () => {
  return (
    <>
      <section className={s.intro}>
        <div className={s.intro__container}>
          <div className={s.intro__inner}>
            <h1 className={s.intro__title}>Lorem ipsum dolor .</h1>
            <h3 className={s.intro__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              iusto!
            </h3>
            <p className={s.intro__text}>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
      <section className={s.aboutUs}>
        <div className={s.container}>
          <div className={s.aboutUs__inner}>
            <div className={s.pesoneBlock}>
              <div className={s.aboutUs__elem}>
                <div className={s.img__hover}>
                  <div className={s.social__hover__wrapper}>
                    <a href="3">
                      <svg className={s.hoverSocialIcon}>
                        <use xlinkHref={socialsSprite + "#instagram"}></use>
                      </svg>
                    </a>
                    <a href="3">
                      <svg className={s.hoverSocialIcon}></svg>
                    </a>
                    <a href="3">
                      <svg className={s.hoverSocialIcon}>
                        <use xlinkHref={socialsSprite + "#email"}></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <img src="../images/dima-avatar.jpg" alt="avatar" />
              </div>
              <div className={s.aboutUs__elem}>
                <h2 className={s.aboutUs__elem__title}>Lorem, ipsum.</h2>
                <p className={s.aboutUs__elem__text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quibusdam dolores error sint, tenetur minus accusantium,
                  quidem illo nemo modi soluta odit cupiditate. Ea, inventore.
                </p>
              </div>
              <div className={s.aboutUs__elem}>
                <p className={s.aboutUs__elem__text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quibusdam dolores error sint, tenetur minus accusantium,
                  quidem illo nemo modi soluta odit cupiditate. Ea, inventore.
                </p>
              </div>
              <div className={s.aboutUs__elem}>
                <img src="../images/dima-avatar.jpg" alt="avatar" />
              </div>
              <div className={s.aboutUs__elem}>
                <img src="../images/dima-avatar.jpg" alt="avatar" />
              </div>
              <div className={s.aboutUs__elem}>
                <p className={s.aboutUs__elem__text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quibusdam dolores error sint, tenetur minus accusantium,
                  quidem illo nemo modi soluta odit cupiditate. Ea, inventore.
                </p>
              </div>
              <div className={s.aboutUs__elem}>
                <p className={s.aboutUs__elem__text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quibusdam dolores error sint, tenetur minus accusantium,
                  quidem illo nemo modi soluta odit cupiditate. Ea, inventore.
                </p>
                <div className={s.aboutUs__elem__social}>
                  <a href="3">
                    <svg className={s.aboutUsSocialIcon}>
                      <use xlinkHref={socialsSprite + "#instagram"}></use>
                    </svg>
                  </a>
                  <a href="3">
                    <svg className={s.aboutUsSocialIcon}>
                      <use xlinkHref={socialsSprite + "#vk"}></use>
                    </svg>
                  </a>
                  <a href="3">
                    <svg className={s.aboutUsSocialIcon}>
                      <use xlinkHref={socialsSprite + "#email"}></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={s.aboutUs__elem}>
                <img src="../images/dima-avatar.jpg" alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
