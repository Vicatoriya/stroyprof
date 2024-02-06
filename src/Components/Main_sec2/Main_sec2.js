import React from "react";
import "../../index.css";
import "./Main_sec2.css"
import Enter from "../Enter/Enter";
import Select from "../Select/Select"

export default function Main_sec2(){
    return(
        <div className="form">
        <Select id="krov_form" text="Выберите форму крыши"></Select>
        <Select id="work_type" text="Виды работ"></Select>
        <Select id="krov_type" text="Вид покрытия"></Select>
        <Enter id="meters" text="Количество м^2"></Enter>
        <Enter id="location" text="Местонахождение объекта"></Enter>
        <Enter id="phone" text="Телефон для связи"></Enter>
        <Enter id="name" text="Ваше имя"></Enter>
        <button>Рассчитать</button>
        </div>
    )
}