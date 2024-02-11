import styled from "styled-components";
import React from "react";
//типа путь к картинке + текст под картинкой
const Image = styled.img`
        width: 200px;
        height: 200px;
        //margin-left: 100px;
    `;
const Item = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 100px;
      margin-top:30px;
      font-family: Play;
      `;
const MaterCard = (props) => {//в пропсы передаем данные из массива

    return (
        <Item>
            <Image src={props.path} />
            <h3>{props.text}</h3>
        </Item>
    );
};
export default MaterCard;