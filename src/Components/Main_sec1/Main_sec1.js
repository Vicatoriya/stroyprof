import React from "react";
import "../../index.css";
import './Main_sec1.css'
import image from '../../pics/back.png'

export default function Main_sec1(){
    return(     
        <div id="main" className="box">
            <img className="main_img" src={image}></img>
            <div className="main_text">
                <div className="text_title">
                    <h2>STROYPROF ВЫПОЛНЯЕТ</h2>
                    <h2>ШИРОКИЙ СПЕКТР РАБОТ</h2>
                    <h2>ДЛЯ ВАШЕГО ДОМА:</h2>
                </div>
                <ul>
                <li>Монтаж и демонтаж кровли</li>
                <li>Ремонт кровли</li>
                <li>Отделка вагонкой</li>
                <li>Отделка парилок</li>
                <li>Сантехника</li>
                <li>Отделка фасадов деревом</li>
                <li>Возведение каркасных домов</li>
                <li>Электрика</li>
                </ul>
            </div>
        </div>

    )
}