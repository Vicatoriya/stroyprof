import React from "react";
import "../../index.css";
import "./Main_sec3.css"
import Title from "../Title/Title";
import img1 from "../../pics/about_us/about_us1.png"
import img2 from "../../pics/about_us/about_us2.png"
import img3 from "../../pics/about_us/about_us3.png"
import img4 from "../../pics/about_us/about_us4.png"
import img5 from "../../pics/about_us/about_us5.png"
import img6 from "../../pics/about_us/about_us6.png"

export default function Main_sec3(){
    return(
        <>
            <div className="about_sec">
                <img className="about_pic" src={img1}></img>
                <img  className="about_pic" src={img2}></img>
                <img  className="about_pic" src={img3}></img>
                <img  className="about_pic" src={img4}></img>
                <img  className="about_pic" src={img5}></img>
                <img  className="about_pic" src={img6}></img>
            </div>
        </>
    )
}