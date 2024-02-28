import React from "react";
import "../../index.css";
import "./Main_sec3.css"
import Title from "../Title/Title";
import img1 from "../../pics/about_us/about_us1.jpg"
import img2 from "../../pics/about_us/about_us2.jpg"
import img3 from "../../pics/about_us/about_us3.jpg"
import img4 from "../../pics/about_us/about_us4.jpg"
import img5 from "../../pics/about_us/about_us5.jpg"
import img6 from "../../pics/about_us/about_us6.jpg"

export default function Main_sec3(){
    return(
        <>
            <Title title="О нас"></Title>
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