import MaterCard from "./vidmater_card";
import styled from "styled-components";
import Title from '../../Title/Title';
import {useEffect, useState} from "react";
const Cards = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 100px;
      margin-right: 100px;
    `;

const C1 = () => {
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
    return(
        <div className = "c1">
            <Title title="Виды материалов"></Title>

            {/*тут короче нужно для каждого
            элемента массива карточку MaterCard сделать*/}
            <Cards>
                {CoverTypesData.map((coverType,index)=>(

                <MaterCard path={coverType.pic} text={coverType.name}/>
                ))}
            </Cards>
        </div>
    );
};
export default C1;