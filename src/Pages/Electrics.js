import React, {useEffect, useState} from "react";
import Price from "../Components/Additional_Pager/Price/Price";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
import info from "../local_json/ParilkiInfo.json";
import elec from "../local_json/frstsectElectrics.json";
export default function Electrics(){

    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
        setPriceData(info[0].prices);
    },[]);

    const [frstData, setData] = useState([]);
    useEffect(() => {
       setData(elec[0].frst);
    }, []);

    return(
        <>
            <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <Price PriceData={PriceData}/>
            <Footer/>
        </>
    )
}