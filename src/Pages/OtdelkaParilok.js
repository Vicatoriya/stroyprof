import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import "./Remont.css";
import data1 from "./data/forParilkas/DataForG1parilka";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import Title from "../Components/Title/Title";
import frst from "../local_json/frstsectParilki.json";
export default function OtdelkaParilok(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
        setData(frst[0].first);
    }, []);

    return(
        <div className={"remont"}>
            <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1}/>
            <Footer/>
        </div>
    )
}