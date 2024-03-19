import React, {useEffect, useState} from "react";
import First_section from "../Components/First_section/First_section";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import data1 from "./data/forVagonka/DataForG1vagonka";
import Title from "../Components/Title/Title";
import Call from "../Components/Call/Call";
import Upsite from "../Components/Upsite/Upsite";
export default function OtdelkaVagonkoy(){

    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectVagonka.json');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                setData(jsonData[0]);
            } catch (error) {
                console.error('ошибка при загрузке и обработке данных', error);
            }
        };

        fetchData();
    }, []);
    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('Vagonka_array.json');
                if(!response.ok){
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                const extractedData = jsonData[0].prices.map(price=>({
                    name: price.name,
                    cost: price.cost,
                    metrics: price.metrics
                }));
                setPriceData(extractedData);
            }catch (error){
                console.error('ошибка при загрузке и обработке данных', error);
            }
        }
        fetchData();
    },[]);
    return(
        <>
            <Upsite/>
            <Header/>
            <First_section data={frstData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1}/>
            <Price PriceData={PriceData}/>
            <Call/>
            <Footer/>
        </>
    )
}