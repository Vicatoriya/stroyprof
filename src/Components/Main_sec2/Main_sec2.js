import React,{useRef,useState,useEffect} from "react";
import "../../index.css";
import "./Main_sec2.css"
import Select from "../Select/Select"
import emailjs from "@emailjs/browser"
import validator from "validator";

export default function Main_sec2(){
  const [phone,setPhone]=useState('');
  const [m,setM]=useState('');
  const [address,setAdress]=useState('');
  const [name,setName]=useState('');
  const [phoneDirty,setPhoneDirty]=useState(false);
  const [incorrectPhone,setIncorrectPhone]=useState("Некорректный номер телефона");
  const [formValid,setFormValid]=useState(false);
  const [clicked,setClicked]=useState(false);

  const phoneHandler=(e)=>{
      setPhone(e.target.value);
      if(!(validator.isMobilePhone(e.target.value, ['be-BY']) || (validator.contains(e.target.value,"80") && validator.isLength(e.target.value,11,11))))
          setIncorrectPhone("Некорректный номер телефона");
      else{
          setIncorrectPhone("");
      }
  }

  const nameHandler=(e)=>{
    setName(e.target.value);
  }
  const mHandler=(e)=>{
    setM(e.target.value);
  }
  const addressHandler=(e)=>{
    setAdress(e.target.value);
  }
  const blurHandler=(e)=>{
      setPhoneDirty(true);
  }

  const HandleClick=(e)=>{
    setAdress("");
    setM("");
    setName("");
    setPhone("");
    setClicked(true);
    emailjs.sendForm('service_xx4kczk', 'template_hcbrf35', form.current,{publicKey:"VB9TxeuvGsQJ2WSTh"});
  }

  useEffect(()=>{
      if(incorrectPhone){
          setFormValid(false);
      } else{
          setFormValid(true);
      }
  },[incorrectPhone])

    const form = useRef();
    return(
        <form ref={form} className="form">
          <Select name="form" text="Выберите форму крыши"></Select>
          <Select name="work" text="Виды работ" ></Select>
          <Select name="type" text="Вид покрытия"></Select>
          <label htmlFor="m">Количество м^2</label>
          <input onChange={e=>mHandler(e)} value={m} type="text" name="m" id="m" className="control"></input>

          <label htmlFor="address">Местонахождение объекта</label>
          <input onChange={e=>addressHandler(e)} value={address} type="text" name="address" id="address" className="control"></input>

          <label htmlFor="phone">Телефон для связи</label>
          <input onChange={e=>phoneHandler(e)} value={phone} onBlur={e=>blurHandler(e)}  type="text" name="phone" id="phone" className="control"></input>
          {(phoneDirty && incorrectPhone) && <div style={{color:'red',margin:'0 0 0 4%'}}>{incorrectPhone}</div>}

          <label htmlFor="name">Ваше имя</label>
          <input onChange={e=>nameHandler(e)} value={name} type="text" name="name" id="name" className="control"></input>
          {formValid && <a onClick={e=>HandleClick(e)} type="submit"  href="\form_sent">Рассчитать</a>}
          {!formValid && <a onClick={e=>HandleClick(e)} className="a_disabled" type="submit" href="\form_sent">Рассчитать</a>}
          {clicked && <div style={{color:"white",margin:"0 auto 10px auto"}}>Данные успешно отправлены!</div>}
          <div style={{color:"white",margin:"0 auto 10px auto"}}>Заполните все поля формы!</div>
        </form>
    )
}
