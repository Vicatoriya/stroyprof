import React from 'react';
import ReactDOM from 'react-dom/client';
import MyImage from '../../pics/a.jpg';
import "./First_section.css";
import '../../index.css'

export default function First_section(){
    return(<div className='first_section'>
    <img className='photo' src={MyImage}></img>
    <div>
        <h1 className='text'>КРОВЕЛЬНЫЕ РАБОТЫ</h1>
        <p className='text'>Кровельные работы - обязательный вид работ при строительстве, капитальном ремонте, реконструкции здания.</p>
        <p className='text'>Они придусматривают устройство крыши с покрытмем из листовых, штучных, рулонных, мастичных материалов.</p>
    </div>
</div>)
}