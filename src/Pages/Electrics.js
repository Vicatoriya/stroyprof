import React, {useEffect, useState} from "react";
import Price from "../Components/Additional_Pager/Price/Price";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
export default function Electrics(){
    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('ParilkiInfo.json');
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
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectElectrics.json');
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