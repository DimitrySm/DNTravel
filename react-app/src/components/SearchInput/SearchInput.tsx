import React from "react";
import s from "./SearchInput.module.css";

import sendBbuttonIcon from "../../assets/images/svg/send-button-icon.svg";

const SearchInput = () => {
  return (
    <div className={s.searchBlock}>
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
  );
};

export default SearchInput;
