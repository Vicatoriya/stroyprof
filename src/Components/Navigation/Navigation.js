import React from 'react';
import './Navigation.css';
import '../../index.css'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    
    return (
        <header>
            <Link to='/'>Главная</Link>
            <Link to="/#calc">Расчет кровли</Link>
            <Link to="/#work_types">Виды работ</Link>
            <Link to="/#call">Заказать звонок</Link>
            <Link to="/#about_us">О нас</Link>
            <Link to="/#contacts">Контакты</Link>
        </header>
    );
};
export default Header;