// import React, {useEffect, useState} from 'react';
// import Upsite from "../Components/Upsite/Upsite";
// import Header from "../Components/Header/Header";
// import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
// import Price from "../Components/Additional_Pager/Price/Price";
// import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
// import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
// import First_section from '../Components/First_section/First_section';
// import Title from "../Components/Title/Title";
// import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
// const Krovla = () => {
//     const [GalleryData,setPriceData] = useState([]);
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const response = await fetch('Examples.js');
//                 if(!response.ok){
//                     throw new Error('Ошибка при загрузке файла');
//                 }
//                 const jsonData = await response.json();
//                 const extractedData = jsonData[0].roof.map(type=>({
//                     g1: type.g1,
//                     g2: type.g2,
//                 }));
//                 setPriceData(extractedData);
//             }catch (error){
//                 console.error('ошибка при загрузке и обработке данных', error);
//             }
//         }
//         fetchData();
//     },[]);
//
//     return(
//         <div>
//             <Upsite/>
//             <Header/>
//             <First_section/>
//             <C1/>
//             <Vid_Krovli />
//             <Price/>
//             <Title title={"Примеры работ"}/>
//             <G1 data={GalleryData.g1}/>
//             <G2 data={GalleryData.g2}/>
//         </div>
//     )
// }
// export default Krovla;
/// Компонент Krovla
import React, { useEffect, useState } from 'react';
import Upsite from "../Components/Upsite/Upsite";
import Header from "../Components/Header/Header";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
import First_section from '../Components/First_section/First_section';
import Title from "../Components/Title/Title";
import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
import data2 from "./data/forKrov/DataForG2krov";
import data1 from "./data/forKrov/Examples";
import Footer from '../Components/Footer/Footer';
const Krovla = () => {
    const [frstData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('frstsectKrovData.json');
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
    const [CoverTypesData,setCoverTypesData] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response =await fetch('Krovla_array.json');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                const extractedData = jsonData[0].cover_types.map(coverType => ({
                    name: coverType.name,
                    pic: coverType.pic
                }));
                setCoverTypesData(extractedData);
            } catch (error){
                console.error('ошибка при загрузке и обработке данных',error);
            }
        }
        fetchData();
    },[]);
    const [PriceData,setPriceData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('Krovla_array.json');
                if(!response.ok){
                    throw new Error('Ошибка при загрузке файла');
                }
                const jsonData = await response.json();
                const extractedData = jsonData[0].prices.map(price=>({
                    name: price.name,
                    cost: price.cost,
                    metrics: price.metrics
                }));
                setPriceData(extractedData);
            }catch (error){
                console.error('ошибка при загрузке и обработке данных', error);
            }
        }
        fetchData();
    },[]);
    return (
        <div>
            <Upsite />
            <Header />
            <First_section data={frstData}/>
            <C1 data={CoverTypesData}/>
            <Vid_Krovli />
            <Price PriceData={PriceData}/>
            <Title title={"Примеры работ"} />
            <G1 data={data1} />
            <G2 data={data2} />
            <Footer></Footer>
        </div>
    );
};

export default Krovla;
