import Title from "../../Title/Title";
import {useEffect, useState} from "react";
import Paragraph from "./Text_Paragraph";

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
        <div>
            <Title title={"Какой вид кровли вы выбрали?"}/>
            {RoofTypeData.map((item,index)=>(
            <Paragraph title={item.title} paragraph={item.paragraph}/>
            ))}
        </div>
    );
}
export default Vid_Krovli;