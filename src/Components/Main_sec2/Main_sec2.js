import React,{useRef,useState,useEffect} from "react";
import "../../index.css";
import "./Main_sec2.css"
import Enter from "../Enter/Enter";
import Select from "../Select/Select"
import emailjs from "@emailjs/browser"
import validator from "validator";

export default function Main_sec2(){
  const [phone,setPhone]=useState('');
  const [phoneDirty,setPhoneDirty]=useState(false);
  const [incorrectPhone,setIncorrectPhone]=useState("Некорректный номер телефона");
  const [formValid,setFormValid]=useState(false);

  const phoneHandler=(e)=>{
      setPhone(e.target.value);
      if(!(validator.isMobilePhone(e.target.value, ['be-BY']) || (validator.contains(e.target.value,"80") && validator.isLength(e.target.value,11,11))))
          setIncorrectPhone("Некорректный номер телефона");
      else{
          setIncorrectPhone("");
      }
  }

  const blurHandler=(e)=>{
      setPhoneDirty(true);
  }

  useEffect(()=>{
      if(incorrectPhone){
          setFormValid(false);
      } else{
          setFormValid(true);
      }
  },[incorrectPhone])

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
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
          <label htmlFor="phone">Телефон для связи</label>
          <input onChange={e=>phoneHandler(e)} value={phone} onBlur={e=>blurHandler(e)}  type="text" name="phone" id="phone" className="control"></input>
          {(phoneDirty && incorrectPhone) && <div style={{color:'red',margin:'0 0 0 4%'}}>{incorrectPhone}</div>}
          <Enter name="name" text="Ваше имя" ></Enter> 
          <button  disabled={!formValid} type="submit">Рассчитать</button> 
        </form>
    )
}
