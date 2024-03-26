import React from "react";
import "../../index.css";
import "../Main_sec2/Main_sec2"

export default function Select({text,name}){
    return(
        <>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} className="control">
            <option value="">Выберите подходящий вариант</option>
            {name=="form" &&
            <>
                <option value="Односкатная">Односкатная</option>
                <option value="Двухскатная">Двухскатная</option>
                <option value="Вальмовая">Вальмовая</option>
                <option value="Сложной формы">Сложной формы</option>
            </>}
            {name=="work" &&
            <> 
                <option value="Демонтаж">Демонтаж</option>
                <option value="Монтаж">Монтаж</option>
                <option value="Демонтаж+монтаж">Демонтаж+монтаж</option>
                <option value="Полный комплекс">Полный комплекс</option>
                <option value="Пока в раздумьях">Пока в раздумьях</option>
            </>}
            {name=="type" &&
            <>
                <option value="Металлочерепица">Металлочерепица</option>
                <option value="Металлопрофиль">Металлопрофиль</option>
                <option value="Модульная черепица">Модульная черепица</option>
                <option value="Композитная черепица">Композитная черепица</option>
                <option value="Шифер">Шифер</option>
                <option value="Андулин">Андулин</option>
                <option value="Другое">Другое</option>
            </>}
        </select>
        </>
    )
}