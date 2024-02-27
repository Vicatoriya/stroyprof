import React from "react";
import "../index.css";
import Header from "../Components/Header/Header";
import Upsite from "../Components/Upsite/Upsite";
import Price from "../Components/Additional_Pager/Price/Price";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import First_section from "../Components/First_section/First_section";
import Title from "../Components/Title/Title";
import Main_sec2 from "../Components/Main_sec2/Main_sec2";
import Call from "../Components/Call/Call";
import Main_sec1 from "../Components/Main_sec1/Main_sec1";
import Links from "../Components/Links/Links"

import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1"
import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2"

const HomePage = () =>  {
    return(
        <div>
            <a href="/SecApp">secapp</a>
            <Upsite/>
            <Header/>
            <Main_sec1/>
            <Title title="Расчет кровли"/>
            <Main_sec2/>
            <Title title="Виды работ"/>
            <Links/>
            <Call/>
            {/* <First_section/>
          <C1/>
           <Price/>
           < G1/>
            <G2/> */}
        </div>
    )
}
export default HomePage;