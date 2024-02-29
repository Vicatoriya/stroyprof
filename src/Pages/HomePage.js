import React from "react";
import "../index.css";
import Header from "../Components/Header/Header";
import Upsite from "../Components/Upsite/Upsite";
import Title from "../Components/Title/Title";
import Main_sec2 from "../Components/Main_sec2/Main_sec2";
import Call from "../Components/Call/Call";
import Main_sec1 from "../Components/Main_sec1/Main_sec1";
import Links from "../Components/Links/Links"
import Main_sec3 from "../Components/Main_sec3/Main_sec3";
import Footer from "../Components/Footer/Footer";

const HomePage = () =>  {
    return(
        <>
            <Upsite/>
            <Header/>
            <Main_sec1/>
            <Title  id="calc" title="Расчет кровли"/>
            <Main_sec2 />
            <Title id="work_types"title="Виды работ"/>
            <Links/>
            <Call/>
            <Title id="about_us" title="О нас"></Title>
            <Main_sec3/>
            <Footer/>
        </>
    )
}
export default HomePage;