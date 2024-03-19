import React, {useEffect, useState} from "react";
import Upsite from "../Components/Upsite/Upsite";
import First_section from "../Components/First_section/First_section";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
import "./Remont.css";
export default function RemontKrovli(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectRemont.json');
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
            <Upsite/>
            <Header/>
            <First_section data={frstData}/>
            <h1></h1>
            <Call/>
            <Footer/>
        </div>
    )
}