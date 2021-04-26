import React from "react";
import s from "./BlogsPage.module.css";
import sendBbuttonIcon from "../../assets/images/svg/send-button-icon.svg";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";

const BlogsPage = () => {
  return (
    <>
      <section className={s.intro}>
        <div className={s.intro__inner}>
          <div className={s.searchBlock}>
            <h2 className={s.searchBlock__title}>
              Lorem ipsum dolor sit amet.
            </h2>
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
        </div>
      </section>
      <section className={s.postsSection}>
        <div className={s.container}>
          <div className={s.postsSection__inner}>
            <div className={s.posts__wrapper}>
              <BlogPostCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
