import React from "react";
import s from "./BlogPostCard.module.css";

const BlogPostCard = () => {
  return (
    <a href="3" className={s.post__card}>
      <div className={s.post__card__img}>
        <img
          src="../../assets/images/cities/warsawa/attractions/Warsaw-Palace-Square-3.jpg"
          alt=""
        />
        <p className={s.post__card__date}>25.08.21</p>
      </div>
      <div className={s.post__card__content}>
        <p className={s.post__card__tags}>
          <span>TAG</span>
          <span>TAG</span>
        </p>
        <h4 className={s.post__card__title}>Title</h4>
        <p className={s.post__card__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          temporibus at nulla odio laudantium aspernatur tempora, voluptas
          reprehenderit iure dolorum, numquam obcaecati. Neque, dolor numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          temporibus at nulla odio laudantium aspernatur tempora, voluptas
          reprehenderit iure dolorum, numquam obcaecati. Neque, dolor numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          temporibus at nulla odio laudantium aspernatur tempora, voluptas
          reprehenderit iure dolorum, numquam obcaecati. Neque, dolor numquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          temporibus at nulla odio laudantium aspernatur tempora, voluptas
          reprehenderit iure dolorum, numquam obcaecati. Neque, dolor numquam!
        </p>
      </div>
    </a>
  );
};

export default BlogPostCard;
