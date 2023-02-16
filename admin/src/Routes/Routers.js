import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../pages/Admin'
import Book from '../pages/Book'
import Home from '../pages/Home'
import Login from '../pages/LoginRegister/Login'
import Register from '../pages/LoginRegister/Register'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </>
    )
}

export default Routers