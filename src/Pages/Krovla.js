// krovla.js
import React, { useEffect, useState } from 'react';
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
import First_section from '../Components/First_section/First_section';
import Title from "../Components/Title/Title";
import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
import data2 from "./data/forKrov/DataForG2krov";
import data1 from "./data/forKrov/Examples";
import Footer from '../Components/Footer/Footer';
import frstdata from "../local_json/frstsectKrovData.json";
import cover_type from "../local_json/Krovla_Array.json"; // изменено
import prices from "../local_json/Krovla_Array.json"; // изменено

const Krovla = () => {
    const [frstData, setFrstData] = useState({});
    useEffect(() => {
        setFrstData(frstdata[0].frstdata);
    }, []);

    const [CoverTypesData,setCoverTypesData] = useState([]);
    useEffect(()=>{
        setCoverTypesData(cover_type[0].cover_types);
    },[]);

    const [PricesData,setPriceData] = useState([]);
    useEffect(()=>{
        setPriceData(prices[0].prices);
    },[]);

    return (
        <>
            <Header />
            <Navigation/>
            <First_section data={frstData}/>
            <C1 data={CoverTypesData}/>
            <Vid_Krovli />
            <h1></h1>
            <Price PriceData={PricesData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1} />
            <Title title={"Детали работы"} />
            <G2 data={data2} />
            <Footer/>
        </>
    );
};

export default Krovla;
