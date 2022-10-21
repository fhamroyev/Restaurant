import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FoodDetail from "./components/FoodDetail";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/food/:id" element={<FoodDetail />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/cart" element={<Cart />} exact />
                <Route path="/purchase" element={<Buy />} exact />
            </Routes>
        </BrowserRouter>
    )
}