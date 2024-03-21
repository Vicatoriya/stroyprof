import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Krovla from "./Pages/Krovla";
import OtdelkaDerevom from "./Pages/OtdelkaDerevom";
import OtdelkaVagonkoy from "./Pages/OtdelkaVagonkoy";
import OtdelkaParilok from "./Pages/OtdelkaParilok";
import RemontKrovli from "./Pages/RemontKrovli";
import Electrics from "./Pages/Electrics";
import WoodHouse from "./Pages/WoodHouse";
import "./Pages/Remont.css";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roof" element={<Krovla />} />
                <Route path="/wood_trim" element={<OtdelkaDerevom />} />
                <Route path="/clapboard" element={<OtdelkaVagonkoy />} />
                <Route path="/steam_rooms" element={<OtdelkaParilok/>} />
                <Route path="/roof_repair" element={<RemontKrovli/>} />
                <Route path="/wood_houses" element={<WoodHouse/>} />
                <Route path="/Electrics" element={<Electrics/>} />
            </Routes>
        </Router>
    );
}
