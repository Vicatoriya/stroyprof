import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation"
import Footer from "../Components/Footer/Footer";
import Form_sent_text from "../Components/Form_sent_text/Form_sent_text";

export default function Form_sent(){
    return(
        <>
            <Header/>
            <Navigation/>
            <Form_sent_text/>
            <Footer/>
        </>
    )
}