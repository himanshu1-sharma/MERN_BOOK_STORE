import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/LoginRegister/Register'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default Routers