import React from "react";
import "../../index.css"
import "./Footer.css"

export default function Footer(){
    return(
        <div id="contacts">
            <div className="orange_ribbon"></div>
            <div className="contacts">
                <h3 className="contacts_text">Контакты</h3>
                <p className="number"><strong>+375 44 733 70 88</strong> Владимир A1</p>
                <p className="number"><strong>+375 29 868 89 55</strong> Владимир МТС</p>
                <p className="number"><strong>+375 29 626 71 30</strong> Андрей</p>
                <div className="small_orange_ribbon"></div>
                <div className="copyright">
                    <h4 className="copyright_item">Copyright @ 2024 Stroyprof</h4>
                    <h4 className="copyright_item">Powered by Stroyprof</h4>
                </div>
            </div>

        </div>
    )
}