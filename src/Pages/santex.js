import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import Price from "../Components/Additional_Pager/Price/Price";
import price from "../local_json/Santex_Array.json";
import frst from "../local_json/frstsectSantex.json";
export default function Santex(){

    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
        setPriceData(price[0].prices);
    },[]);

    const [frstData, setData] = useState([]);
    useEffect(() => {
       setData(frst[0].first);
    }, []);

    return(
        <>
            <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <Price PriceData={PriceData}/>
            <Footer/>
        </>
    );
}