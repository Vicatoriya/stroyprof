import React from 'react';
import './Header.css';
import '../../index.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className = "header block">
            <Link to="#main">Главная</Link>
            <Link to="#calc">Расчет кровли</Link>
            <Link to="#work_types">Виды работ</Link>
            <Link to="#call">Заказать звонок</Link>
            <Link to="#about_us">О нас</Link>
            <Link to="#contacts">Контакты</Link>

        </header>
    );
};
export default Header;