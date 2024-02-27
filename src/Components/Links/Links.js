import React,{useState,useEffect} from "react";
import "../../index.css";
import "./Links.css"

import Links_pic from "../Links_pic/Links_pic";
export default function Links(){
    const [jsonData,setJsonData] = useState([]);
    useEffect(()=> {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'Vidi_Rabot_Array.json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                const parsedData = JSON.parse(xhr.responseText);
                setJsonData(parsedData);
            }
        };
        xhr.send();
    },[]);
    return(
        <div className="cont">
            {jsonData.map((item,index)=>(
                <Links_pic key = {index} name = {item.name} link = {item.link} pic = {item.pic}/>
            ))}
        </div>        
    )
}