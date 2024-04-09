import React, {useEffect, useState} from "react";
import First_section from "../Components/First_section/First_section";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Footer from "../Components/Footer/Footer";
import Call from "../Components/Call/Call";
import Title from "../Components/Title/Title";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import data1 from "./data/forDerev/DataForG1derevo";
import derevData from "../local_json/frstsectDerevData.json";
import dd from "../local_json/Derevo_Array.json";

export default function OtdelkaDerevom(){
    const [frstData, setData] = useState([]);

    useEffect(() => {
       setData(derevData[0].first);
    }, []);

    const [DerevoTypesData,setCoverTypesData] = useState([]);
    useEffect(()=> {
                setCoverTypesData(dd[0].derevo_types);
    },[]);
    return(
        <div>
            <Header/>
            <Navigation/>
            <First_section data={frstData}/>
            <C1 data={DerevoTypesData}/>
            <Title title={"Примеры работ"} />
            {/*<G1 data={data1} />*/}
            <Footer/>
        </div>
    )
}