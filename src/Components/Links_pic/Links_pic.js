import React from "react";
import "../../index.css";
import "../Links/Links.css"
import img from "./rob1_small.jpg"
export default function Links_pic(){
    return(
    <div className="pic">
    <img src={img}></img>
    <div className="upper_text">
        <h3>Кровля</h3>
        <h4>Подробнее...</h4>
    </div>
    </div>
    )
}