import React from "react";
import "../../index.css";
import './Main_sec1.css'
import image from '../../pics/back.jpg'

export default function Main_sec1(){
    return(
        <>       
        <div className="outer">
        <img src={image}></img>
        <div className="inner">
            <h2>Кровельные работы</h2>
            <h3>Индивидуальный подход</h3>
            <p>Наша компания предлагает прекрасную возможность купить и смонтировать кровлю, отвечающую мировым стандартам качества</p>
            <p>Работаем только с известными отчественными и зарубежными брендами.</p>
        </div>
        </div>
        </>

    )
}