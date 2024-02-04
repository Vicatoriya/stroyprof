import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Upsite from "./Components/Upsite/Upsite";
import First_section from "./Components/First_section/First_section";


export default function App(){
    return(
        <div>
              <Upsite></Upsite>
            <Header></Header>
          
            <First_section></First_section>
        </div>
    )
}