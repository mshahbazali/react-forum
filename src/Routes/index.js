import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import CreateTopic from '../Pages/CreateTopic'
import CreateAccount from '../Pages/CreateAccount'

export default function index() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-topic" element={<CreateTopic />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </Router>
    )
}
