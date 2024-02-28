import React, {useEffect, useState} from 'react';
import DataTable from './Table';
import './Price.css';
import Title from "../../Title/Title";
// const dataArray = [
//     ['Значение 1.1', 'Значение 1.2', 'Значение 1.2'],
//     ['Значение 2.1', 'Значение 2.2', 'Значение 1.2'],
//     ['Значение 3.1', 'Значение 3.2', 'Значение 1.2'],
//     ['Значение 4.1', 'Значение 4.2', 'Значение 1.2'],
//     ['Значение 5.1', 'Значение 5.2', 'Значение 1.2'],
//     ['Значение 6.1', 'Значение 6.2', 'Значение 1.2'],
//     ['Значение 7.1', 'Значение 7.2', 'Значение 1.2'],
//     ['Значение 8.1', 'Значение 8.2', 'Значение 1.2'],
//     ['Значение 9.1', 'Значение 9.2', 'Значение 1.2'],
//     ['Значение 10.1', 'Значение 10.2', 'Значение 1.2']
// ];

const Price = () => {
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
    return(
        <div className={'price'} >
            <Title title={"Прайс"}/>
            <DataTable className={'tablica'} data={PriceData} />
        </div>)
};
export default Price;