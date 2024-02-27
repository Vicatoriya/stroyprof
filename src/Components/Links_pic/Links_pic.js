import React from "react";
import "../../index.css";
import "../Links/Links.css"
export default function Links_pic({name,link,pic}){
    return(
    <div className="pic">
    <img src={pic} alt = {""}></img>
    <div className="upper_text">
        <h3>{name}</h3>
        <a href = {link} >Подробнее...</a>
    </div>
    </div>
    )
}