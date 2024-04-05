import React from 'react';
import ReactDOM from 'react-dom/client';
import "./First_section.css";
import '../../index.css'

export default function First_section({data}){
    return(<div className='first_section'>
    <img className='photo' src={data.image}></img>
        <div>
            <h1 className='text'>{data.title}</h1>
            <p className='text'>{data.frst}</p>
            <p className='text'>{data.sec}</p>
            <p className='text'>{data.thr}</p>
        </div>
</div>)
}
