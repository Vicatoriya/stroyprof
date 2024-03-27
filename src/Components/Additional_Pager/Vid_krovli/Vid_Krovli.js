import React, {useEffect, useState} from "react";
import Paragraph from "./Text_Paragraph";
import "./Vid_Krovli.css";
import form_type from "../../../local_json/Krovla_Array.json";
const Vid_Krovli = () =>{//RoofTypeData

    const [RoofTypeData,setFormType] = useState([]);
    useEffect(()=>{
            setFormType(form_type[0].form_types);
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