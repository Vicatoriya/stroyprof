import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import First_section from "../Components/First_section/First_section";
import Call from "../Components/Call/Call";
import Footer from "../Components/Footer/Footer";
import React, {useEffect, useState} from "react";

export default function WoodHouse(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectWoodHouse.json');
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
    <div className={"remont"}>
        <Header/>
        <Navigation/>
        <First_section data={frstData}/>
        <h1></h1>
        <Call/>
        <Footer/>
    </div>
)}
