import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Call from "../Components/Call/Call";
import Footer from "../Components/Footer/Footer";
import React, {useEffect, useState} from "react";
import frst from "../local_json/frstsectWoodHouse.json";
import data1 from "../Pages/data/forHouse/housePhoto";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
export default function WoodHouse(){

    const [frstData, setData] = useState([]);
    useEffect(() => {
      setData(frst[0].first);
    }, []);

    return(
    <div className={"remont"}>
        <Header/>
        <Navigation/>
        <First_section data={frstData}/>
        <G1 data={data1}/>
        <Footer/>
    </div>
)}
