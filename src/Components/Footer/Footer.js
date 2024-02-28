import React from "react";
import "../../index.css"
import "./Footer.css"

export default function Footer(){
    return(
        <>
            <div className="orange_ribbon"></div>
            <div className="contacts">
                <h3 className="contacts_text">Контакты</h3>
                <h4 className="number">+375 xx xxxxxxx</h4>
                <h4 className="number">+375 xx xxxxxxx</h4>
                <h4 className="number">+375 xx xxxxxxx</h4>
                <h4 className="number">+375 xx xxxxxxx</h4>
                <div className="small_orange_ribbon"></div>
                <div className="copyright">
                    <h4 className="copyright_item">Copyright @ 2024 Stroyprof</h4>
                    <h4 className="copyright_item">Powered by Stroyprof</h4>
                </div>
            </div>

        </>
    )
}