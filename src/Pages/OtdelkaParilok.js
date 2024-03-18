import React, {useEffect, useState} from "react";
import Upsite from "../Components/Upsite/Upsite";
import Header from "../Components/Header/Header";
import First_section from "../Components/First_section/First_section";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
import "./Remont.css";
import data1 from "./data/forParilkas/DataForG1parilka";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import Title from "../Components/Title/Title";
export default function OtdelkaParilok(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectParilki.json');
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
            <Title title={"Примеры работ"} />
            <G1 data={data1}/>
            <Call/>
            <Footer/>
        </div>
    )
}