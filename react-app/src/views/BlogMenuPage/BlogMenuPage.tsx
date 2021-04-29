import React from "react";
import sendBbuttonIcon from "../../assets/images/svg/send-button-icon.svg";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";

import s from "./BlogMenuPage.module.css";

type BlogMenuPagePropsType = {
  onBlogMenuClick: () => void;
  closedBlogMenu: boolean;
};

const BlogMenuPage = (props: BlogMenuPagePropsType) => {
  const topicsListWrapper = `${s.topics__list__wrapper} ${
    props.closedBlogMenu === false ? s.active : ""
  }`;
  const menuButton = `${s.menuButton} ${
    props.closedBlogMenu === false ? s.clicked : ""
  }`;

  return (
    <>
      <section className={s.intro}>
        <div className={s.intro__inner}>
          <div className={topicsListWrapper}>
            <ul className={s.topics__list}>
              <h2 className={s.topics__list__title}>Темы блога</h2>
              <li className={s.topics__list__item}>
                <a href="3">Lorem ipsum dolor sit amet, </a>
              </li>
              <li className={s.topics__list__item}>
                <a href="3">Lorem ipsum dolor sit amet, </a>
              </li>
              <li className={s.topics__list__item}>
                <a href="3">Lorem ipsum dolor sit amet, </a>
              </li>
              <li className={s.topics__list__item}>
                <a href="3">Lorem ipsum dolor sit amet, </a>
              </li>
            </ul>
          </div>
          <div className={s.menuButton__wrapper}>
            <div className={menuButton} onClick={props.onBlogMenuClick}>
              <span className={s.menuLine}></span>
              <span className={s.menuLine}></span>
              <div className={s.menuCircle}></div>
              <div className={s.menuCircle}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.searchSection}>
        <div className={s.searchSection__inner}>
          <h2 className={s.searchBlock__title}>Lorem ipsum dolor sit amet.</h2>
          <div className={s.searchBlock__inputWrapper}>
            <input
              type="text"
              placeholder="Введите текст"
              className={s.inputSearch}
            />
            <button className={s.searchBtn}>
              <svg className={s.searchBtnIcon}>
                <use xlinkHref={sendBbuttonIcon + "#send-button-icon"}></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className={s.postsSection}>
        <div className={s.container}>
          <div className={s.postsSection__inner}>
            <h2 className={s.sectionPost__title}>Популярные статьи</h2>
            <div className={s.posts__wrapper}>
              <BlogPostCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMenuPage;
