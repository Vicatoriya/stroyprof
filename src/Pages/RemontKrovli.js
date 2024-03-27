import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import frst from "../local_json/frstsectRemont.json";
import Call from "../Components/Call/Call";
import "./Remont.css";
export default function RemontKrovli(){

    const [frstData, setData] = useState([]);
    useEffect(() => {
        setData(frst[0].first);
    }, []);

    return(
        <div className={"remont"}>
               <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <h1></h1>
            <Footer/>
        </div>
    )
}