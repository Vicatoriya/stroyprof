import styled from "styled-components";
import React from "react";
//типа путь к картинке + текст под картинкой
// const Image = styled.img`
//         width: 200px;
//         height: 200px;
//     `;
// const Item = styled.div`
//         display: compact;
//         //flex-direction: column;
//         //align-items: center;
//         //margin-left: 100px;
//       //margin-top:30px;
//       //font-family: Play;
//   display: flex;
//   margin: 0 10% 70px 10%;
//   align-items: center;
//   flex-wrap: wrap;
//       `;
const MaterCard = (props) => {//в пропсы передаем данные из массива

    return (
        <div className="CardForVM">
            <img className="picc" src={props.path} />
            <p>{props.text}</p>
        </div>
    );
};
export default MaterCard;