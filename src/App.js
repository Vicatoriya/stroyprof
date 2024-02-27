import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecApp from "./Pages/SecApp";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/SecApp" element={<SecApp />} />
            </Routes>
        </Router>
    );
}
