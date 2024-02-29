import React, {useEffect, useState} from 'react';
import Upsite from "../Components/Upsite/Upsite";
import Header from "../Components/Header/Header";
import Main_sec1 from "../Components/Main_sec1/Main_sec1";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
import First_section from '../Components/First_section/First_section';
import Title from "../Components/Title/Title";
import Paragraph from "../Components/Additional_Pager/Vid_krovli/Text_Paragraph";
import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
const Krovla = () => {

    return(
        <div>
            <Upsite/>
            <Header/>
            <First_section/>
            <C1/>
            <Vid_Krovli />
            <Price/>
            <Title title={"Примеры работ"}/>


            {/*RoofTypeData={RoofTypeData}*/}
            <G1/>
            <G2/>
        </div>
    )
}
export default Krovla;