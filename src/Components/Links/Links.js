import React,{useState,useEffect} from "react";
import "../../index.css";
import "./Links.css"
import vidi from "../../local_json/Vidi_Rabot_Array.json";
import Links_pic from "../Links_pic/Links_pic";
export default function Links(){
    const [jsonData,setJsonData] = useState([]);
    useEffect(()=> {
                setJsonData(vidi[0].vidi_rabot);
                },[]);
    return(
        <div className="cont">
            {jsonData.map((item,index)=>(
                <Links_pic key = {index} name = {item.name} link = {item.link} pic = {item.pic}/>
            ))}
        </div>        
    )
}