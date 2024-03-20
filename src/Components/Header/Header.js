import React from 'react';
import './Header.css';
import '../../index.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <a href="#main">Главная</a>
            <a href="#calc">Расчет кровли</a>
            <a href="#work_types">Виды работ</a>
            <a href="#call">Заказать звонок</a>
            <a href="#about_us">О нас</a>
            <a href="#contacts">Контакты</a>
        </header>
    );
};
export default Header;