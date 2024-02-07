import React,{useRef} from "react";
import "../../index.css";
import "./Call.css"
import emailjs from "@emailjs/browser"

export default function Call(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_bcbbiwk', 'template_knb9jcj', form.current, {
            publicKey: 'IgseQxdVOTCsugiKI',});
    };
    return(
        <form ref={form} onSubmit={sendEmail} className="call_sec">
            <p className="call">Заказать звонок специалиста</p>
            <input type="text" name="phone" className="input"></input>
            <button className="call_button" type="submit">Отправить запрос</button> 
        </form>
    )
}