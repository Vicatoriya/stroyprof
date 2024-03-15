import React, {useEffect, useState} from "react";
import Paragraph from "./Text_Paragraph";
import "./Vid_Krovli.css";
const Vid_Krovli = () =>{//RoofTypeData
    const [RoofTypeData,setPriceData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('Krovla_array.json');
                if(!response.ok){
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                const extractedData = jsonData[0].form_types.map(type=>({
                    title: type.title,
                    paragraph: type.paragraph,
                }));
                setPriceData(extractedData);
            }catch (error){
                console.error('ошибка при загрузке и обработке данных', error);
            }
        }
        fetchData();
    },[]);

    return(
        <div className={"n"}>
            <img className={"bckgr1"} src = {"bckgr/vid_krovli_bckgr1.jpg"} alt={"alt"}/>
            <div className={"unit"}>
                <h1 className={"questTitle"}>
                    Какой вид кровли вы выбрали?
                </h1>
                {RoofTypeData.map((item,index)=>(
                    <Paragraph title={item.title} paragraph={item.paragraph}/>
                ))}
            </div>
        </div>
    );
}
export default Vid_Krovli;