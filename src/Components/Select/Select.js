import React from "react";
import "../../index.css";
import "../Enter/Enter.css"

export default function Select({id,text}){
    return(
        <>
        <label htmlFor={id}>{text}</label>
        <select style={{width:"40%"}} id={id} className="control">
            <option value="">Выберите подходящий вариант</option>
            {id=="krov_form" &&
            <>
                <option value="one_scat">Односкатная</option>
                <option value="two_scat">Двухскатная</option>
                <option value="valm">Вальмовая</option>
                <option value="shatr">Шатровая</option>
                <option value="dif">Сложной формы</option>
            </>}
            {id=="work_type" &&
            <>
                <option value="mont">Монтаж</option>
                <option value="demont">Демонтаж</option>
                <option value="demont+mont">Демонтаж+монтаж</option>
                <option value="all">Полный комплекс</option>
                <option value="unknown">Пока в раздумьях</option>
            </>}
            {id=="krov_type" &&
            <>
                <option value="">Металлочерепица</option>
                <option value="demont">Металлопрофиль</option>
                <option value="demont+mont">Модульная черепица</option>
                <option value="all">Композитная черепица</option>
                <option value="unknown">Шифер</option>
                <option value="unknown">Андулин</option>
                <option value="unknown">Другое</option>
            </>}
        </select>
        </>
    )
}