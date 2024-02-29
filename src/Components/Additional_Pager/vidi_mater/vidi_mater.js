import MaterCard from "./vidmater_card";
import Title from '../../Title/Title';
import './vidi_mater.css';

const C1 = ({data}) => {
    return(
        <div className = "c1">
            <Title title="Виды материалов"></Title>
            <div className="cardsVM">
                {data.map((coverType,index)=>(
                <MaterCard path={coverType.pic} text={coverType.name}/>
                ))}
            </div>
        </div>
    );
};
export default C1;