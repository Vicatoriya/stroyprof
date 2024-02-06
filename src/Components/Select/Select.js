import React from "react";
import "../../index.css";
import "../Enter/Enter.css"

export default function Select({id,text}){
    return(
        <>
        <label htmlFor={id}>{text}</label>
        <select style={{width:"40%"}} id={id} className="control"></select>
        </>
    )
}