import React, {useEffect, useState} from "react";
import First_section from "../Components/First_section/First_section";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import data1 from "./data/forVagonka/DataForG1vagonka";
import Title from "../Components/Title/Title";
import firstData from "../local_json/frstsectVagonka.json";
import price from "../local_json/Otdelka_Vagonkoy_Array.json";


export default function OtdelkaVagonkoy(){

    const [frstData, setData] = useState([]);
    useEffect(() => {
                setData(firstData[0].frst);
    }, []);

    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
       setPriceData(price[0].prices)
    },[]);

    return(
        <>
            <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1}/>
            <Price PriceData={PriceData}/>
            <Footer/>
        </>
    )
}