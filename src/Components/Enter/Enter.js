import React from "react";
import "../../index.css";
import "./Enter.css"

export default function Enter({text,name}){
    
    return(
        <>
        <label htmlFor={name}>{text}</label>
        <input type="text" name={name} id={name} className="control"></input>
        </>
    )
}

