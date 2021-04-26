import React from "react";
import AttractionDiscriptionBlock from "../../components/AttractionDiscriptionBlock/AttractionDiscriptionBlock";

import s from "./AttractionPage.module.css";

const AttractionPage = () => {
  return (
    <>
      <section className={s.intro}>
        <div className={s.container}>
          <div className={s.intro__inner}>
            <h1 className={s.intro__inner__title}>Дворцовая площадь Варшав</h1>
            <p className={s.intro__inner__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              quaerat commodi quis numquam qui ea cumque nisi omnis voluptas
              perferendis hic, reprehenderit assumenda reiciendis. Ipsum!
            </p>
          </div>
        </div>
      </section>
      <section className={s.attrction}>
        <div className={s.container}>
          <div className={s.attraction__inner}>
            <div className={s.breadcrumb__wrapper}>
              <ul className={s.breadcrumb}>
                <li className={s.breadcrumbItem}>
                  <a className={s.breadcrumbLink} href="3">
                    Варшава
                  </a>
                </li>
                <li className={`${s.breadcrumbItem} ${s.active}`}>
                  {" "}
                  Дворцовая площадь Варшав
                </li>
              </ul>
            </div>
            <AttractionDiscriptionBlock />
            <AttractionDiscriptionBlock />
            <AttractionDiscriptionBlock />
            <AttractionDiscriptionBlock />
            <AttractionDiscriptionBlock />
          </div>
        </div>
      </section>
    </>
  );
};

export default AttractionPage;
