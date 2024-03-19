import React, {useEffect, useState} from "react";
import First_section from "../Components/First_section/First_section";
import Upsite from "../Components/Upsite/Upsite";
import Header from "../Components/Header/Header";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
import Title from "../Components/Title/Title";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import data1 from "./data/forDerev/DataForG1derevo";
export default function OtdelkaDerevom(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectDerevData.json');
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
    const [DerevoTypesData,setCoverTypesData] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response =await fetch('Derevo_Array.json');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                const extractedData = jsonData[0].derevo_types.map(derevoType => ({
                    name: derevoType.name,
                    pic: derevoType.pic
                }));
                setCoverTypesData(extractedData);
            } catch (error){
                console.error('ошибка при загрузке и обработке данных',error);
            }
        }
        fetchData();
    },[]);
    return(
        <div>
            <Upsite />
            <Header />
            <First_section data={frstData}/>
            <C1 data={DerevoTypesData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1} />
            <Call/>
            <Footer/>
        </div>
    )
}