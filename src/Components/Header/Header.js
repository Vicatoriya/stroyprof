import React from 'react';
import styled from 'styled-components';
import './Header.css';
import '../../index.css'
import logo from "../../pics/logo.jpg"
import line from "../../pics/line.png"

const Upsite = () => {

    return (
        <div className='upsite'>
            <div className = "upsite_content">
                <img src={logo}></img>
                <div className='together'>
                    <p>+375298688955</p>
                    <p>Belarus, Minsk</p>
                </div>
            </div>
            <img id="upsite_line" src={line}></img>
        </div>
    );
};
export default Upsite;