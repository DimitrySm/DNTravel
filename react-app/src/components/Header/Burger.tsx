import React from "react";
import s from "./Header.module.css";

type BurgerPropsType = {
    collapsedMenu: boolean;
    onChange: () => void;
};

export const Burger = (props: BurgerPropsType) => {
    return (
        <div>
            <BurgerButton
                onChange={props.onChange}
                collapsedMenu={props.collapsedMenu}
            />
            {!props.collapsedMenu && <BurgerDropDown />}
        </div>
    );
};

type BurgerButtonType = {
    onChange: () => void;
    collapsedMenu: boolean;
};

const BurgerButton = (props: BurgerButtonType) => {
    return (
        <div className={s.header__burger} onClick={() => props.onChange()}>
            <button className={s.burger}>
                <span></span>
            </button>
        </div>
    );
};

const BurgerDropDown = () => {
    return (
        <div className={s.dropDown__menu}>
            <a href="#3" className={s.dropDown__menu__link}>
                Главная
            </a>
            <a href="#3" className={s.dropDown__menu__link}>
                Города
            </a>
            <a href="#3" className={s.dropDown__menu__link}>
                Лайфхаки
            </a>
            <a href="#3" className={s.dropDown__menu__link}>
                Блог
            </a>
            <a href="#3" className={s.dropDown__menu__link}>
                О нас
            </a>
        </div>
    );
};
