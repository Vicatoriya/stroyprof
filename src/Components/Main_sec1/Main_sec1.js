import React from "react";
import "../../index.css";
import './Main_sec1.css'
import image from '../../pics/back.jpg'

export default function Main_sec1(){
    return(     
        <div className="box">
            <img className="main_img" src={image}></img>
            <div className="main_text">
                <div className="text_title">
                    <h2>STROYPROF ВЫПОЛНЯЕТ</h2>
                    <h2>ШИРОКИЙ СПЕКТР РАБОТ</h2>
                    <h2>ДЛЯ ВАШЕГО ДОМА:</h2>
                </div>
                <p>Монтаж и демонтаж кровли</p>
                <p>Ремонт кровли</p>
                <p>Отделка вагонкой</p>
                <p>Отделка парилок</p>
                <p>Сантехника</p>
                <p>Отделка фасадов деревом</p>
                <p>Возведение каркасных домов под ключ</p>
                <p>Электрика</p>
            </div>
        </div>

    )
}