import React from "react";
import s from "./BlogPostPage.module.css";

const BlogPostPage = () => {
  return (
    <>
      <section className={s.postSectionBg}></section>
      <section className={s.postSection}>
        <div className={s.container}>
          <div className={s.postSection__inner}>
            <div className={s.post__img}>
              <img
                src="../../assets/images/cities/warsawa/attractions/Warsaw-Palace-Square-3.jpg"
                alt=""
              />
            </div>
            <div className={s.post__content}>
              <p className={s.post__tags}>
                <span>TAG</span>
                <span>TAG</span>
              </p>
              <h4 className={s.post__title}>Title</h4>
              <p className={s.post__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus at nulla odio laudantium aspernatur tempora, voluptas
                reprehenderit iure dolorum, numquam obcaecati. Neque, dolor
                numquam! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel temporibus at nulla odio laudantium aspernatur
                tempora, voluptas reprehenderit iure dolorum, numquam obcaecati.
                Neque, dolor numquam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel temporibus at nulla odio laudantium
                aspernatur tempora, voluptas reprehenderit iure dolorum, numquam
                obcaecati. Neque, dolor numquam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vel temporibus at nulla odio
                laudantium aspernatur tempora, voluptas reprehenderit iure
                dolorum, numquam obcaecati. Neque, dolor numquam!
              </p>
              <p className={s.post__date}>25.08.21</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
