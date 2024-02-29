import React from "react";
import "../../index.css";
import './Title.css'

export default function Title({title,id}){
    return(
        <h2 id={id} className="title">{title}</h2>
    )
}