import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Krovla from "./Pages/Krovla";
import OtdelkaDerevom from "./Pages/OtdelkaDerevom";
import OtdelkaVagonkoy from "./Pages/OtdelkaVagonkoy";
import OtdelkaParilok from "./Pages/OtdelkaParilok";
import RemontKrovli from "./Pages/RemontKrovli";
import Electrics from "./Pages/Electrics";
import WoodHouse from "./Pages/WoodHouse";
import Form_sent from "./Pages/Form_sent"
import "./Pages/Remont.css";
import Santex from "./Pages/Santex";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roof" element={<Krovla />} />
                <Route path="/wood_trim" element={<OtdelkaDerevom />} />
                <Route path="/clapboard" element={<OtdelkaVagonkoy />} />
                <Route path="/steam_rooms" element={<OtdelkaParilok/>} />
                <Route path="/roof_repair" element={<RemontKrovli/>} />
                <Route path="/wood_houses" element={<WoodHouse/>} />
                <Route path="/electrics" element={<Electrics/>} />
                <Route path="/plumbing" element={<Santex/>} />
                <Route path="/form_sent" element={<Form_sent/>}/>
            </Routes>
        </BrowserRouter>
    );
}
