import React from "react";
const MaterCard = (props) => {//в пропсы передаем данные из массива
    return (
        <div className="CardForVM">
            <img className="picc" src={props.path} />
            <p>{props.text}</p>
        </div>
    );
};
export default MaterCard;