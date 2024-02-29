import React from 'react';
import './Header.css';
import '../../index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return (
        <header className = "header block">
            <AnchorLink href="#main">Главная</AnchorLink>
            <AnchorLink href="#calc">Расчет кровли</AnchorLink>
            <AnchorLink href="#work_types">Виды работ</AnchorLink>
            <AnchorLink href="#call">Заказать звонок</AnchorLink>
            <AnchorLink href="#about_us">О нас</AnchorLink>
            <AnchorLink href="#contacts">Контакты</AnchorLink>

        </header>
    );
};
export default Header;