import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Upsite from "./Components/Upsite/Upsite";
import First_section from "./Components/First_section/First_section"
import Main_sec1 from "./Components/Main_sec1/Main_sec1";
import C1 from "./Components/Additional_Pager/vidi_mater";
import First_section from "./Components/First_section/First_section";


export default function App(){
    return(
        <div>
            <Upsite></Upsite>
            <Header></Header>
          
            <First_section/>
          {/*<C1/>*/}
        </div>
    )
}