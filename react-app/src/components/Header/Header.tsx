import React, { useState } from "react";
import s from "./Header.module.css";
import moonSVG from "../../assets/images/svg/moon.svg";
import { Burger } from "./Burger";

const Header = () => {
    const [collapsedMenu, setCollapsedMenu] = useState(false);

    return (
        <header className={s.header}>
            <div className={s.header__inner}>
                <Burger
                    collapsedMenu={collapsedMenu}
                    onChange={() => setCollapsedMenu(!collapsedMenu)}
                />
                <nav className={s.av}>
                    <a href="#3" className={`${s.nav__link} ${s.active}`}>
                        Главная
                    </a>
                    <a href="#3" className={s.nav__link}>
                        Города
                    </a>
                    <a href="#3" className={s.nav__link}>
                        Лайфхаки
                    </a>
                    <a href="#3" className={s.nav__link}>
                        Блог
                    </a>
                    <a href="#3" className={s.nav__link}>
                        О нас
                    </a>
                </nav>
                <div className={s.light__mode}>
                    <button className={s.light__mode__btn}>
                        <svg className={s.moon}>
                            <use xlinkHref={moonSVG + "#moon"}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
