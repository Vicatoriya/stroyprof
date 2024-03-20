import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../index.css";
import Header from "../Components/Header/Header";
import Upsite from "../Components/Upsite/Upsite";
import Title from "../Components/Title/Title";
import Main_sec2 from "../Components/Main_sec2/Main_sec2";
import Call from "../Components/Call/Call";
import Main_sec1 from "../Components/Main_sec1/Main_sec1";
import Links from "../Components/Links/Links"
import Main_sec3 from "../Components/Main_sec3/Main_sec3";
import Footer from "../Components/Footer/Footer";

const HomePage = () =>  {
    const location = useLocation();

    useEffect(() => {
        // Обработка параметров запроса и прокрутка к якорю
        const { search } = location;
        const params = new URLSearchParams(search);
        const section = params.get('h2');

        if (section) {
            const targetElement = document.getElementById(section);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return(
        <>
            {/* <Upsite/> */}
            <Header/>
            <Main_sec1/>
            <Title id="calc" title="Расчет кровли"/>
            <Main_sec2 />
            <Title id="work_types"title="Виды работ"/>
            <Links/>
            <Call/>
            <Title id="about_us" title="О нас"></Title>
            <Main_sec3/>
            <Footer/>
        </>
    )
}
export default HomePage;