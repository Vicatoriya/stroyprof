import MaterCard from "./vidmater_card";
import styled from "styled-components";
import Title from '../../Title/Title';


const C1 = () => {
    const Cards = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 100px;
      margin-right: 100px;
    `;
    return(
        <div className = "c1">
            <Title title="Виды материалов"></Title>

            {/*тут короче нужно для каждого
            элемента массива карточку MaterCard сделать*/}
            <Cards>
                <MaterCard path={'../pics/vidi_mater/1.jpg'} text={'text1'}/>
                <MaterCard path={'../pics/vidi_mater/2.jpg'} text={'text2'}/>
                <MaterCard path={'../pics/vidi_mater/3.jpg'} text={'text3'}/>
                <MaterCard path={'../pics/vidi_mater/4.jpg'} text={'text4'}/>
                <MaterCard path={'../pics/vidi_mater/5.jpg'} text={'text5'}/>
                <MaterCard path={'../pics/vidi_mater/6.jpg'} text={'text6'}/>
                <MaterCard path={'../pics/vidi_mater/7.jpg'} text={'text7'}/>
                <MaterCard path={'../pics/vidi_mater/8.jpg'} text={'text8'}/>
            </Cards>
        </div>
    );
};
export default C1;