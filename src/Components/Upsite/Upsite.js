import React from 'react';
import styled from 'styled-components';
import './Upsite.css';
import '../../index.css'
import logo from "../../pics/logo.png"

const Upsite = () => {

    return (
        <div className='upsite'>
            <div className = "upsite_content">
                <p>STROYPROF</p>
                <div className='together'>
                    <p>+375298688955</p>
                    <p>Belarus, Minsk</p>
                </div>
            </div>
            <div className="orange_rib"></div>
        </div>
    );
};
export default Upsite;