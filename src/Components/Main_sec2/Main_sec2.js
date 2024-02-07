import React,{useRef,useState} from "react";
import "../../index.css";
import "./Main_sec2.css"
import Enter from "../Enter/Enter";
import Select from "../Select/Select"
import emailjs from "@emailjs/browser"

export default function Main_sec2(){
  //  const [info, setInfo] = useState({
  //   form:"",
  //   work:"",
  //   type:"",
  //   m:"",
  //   address:"",
  //   phone:"",
  //   name:"",
  // });
  // const handleClick = () => {
  //   setInfo({m:''});
  // };
    const form = useRef();
    const sendEmail = (e) => {
        // e.preventDefault();
        // emailjs
        //   .sendForm('service_bcbbiwk', 'template_gyr3pxs', form.current, {
        //     publicKey: 'IgseQxdVOTCsugiKI',});
    };
    return(
        <form ref={form} onSubmit={sendEmail} className="form">
          <Select name="form" text="Выберите форму крыши"></Select>
          <Select name="work" text="Виды работ" ></Select>
          <Select name="type" text="Вид покрытия"></Select>
          <Enter name="m" text="Количество м^2"></Enter>
          <Enter name="address" text="Местонахождение объекта"></Enter>
          <Enter name="phone" text="Телефон для связи" ></Enter>
          <Enter name="name" text="Ваше имя" ></Enter> 
          <button type="submit" onClick={handleClick}>Рассчитать</button> 
        </form>
    )
}

