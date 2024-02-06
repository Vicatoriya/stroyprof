import React from "react";
import "../../index.css";
import "./Enter.css"

export default function Enter({id,text}){
    return(
        <>
        <label htmlFor={id}>{text}</label>
        <input type="text"  id={id} className="control"></input>
        </>
    )
}