import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./LoginRegister.css";
import Button from "react-bootstrap/Button";
import { BASEURL } from "../Constant";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { UserState } from "../../Context";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { user, setUser } = UserState()



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Axios.post(`${BASEURL}api/admin/login`, { email, password })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        toast.success(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setUser(data.data.data)
                        localStorage.setItem('userInfo', JSON.stringify(data.data.data))
                        navigate("/")
                    }
                    else {
                        toast.error(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    };
    console.log("user", user)
    return (
        <>
            <ToastContainer />
            <div
                className="container-fluid p-0"
                style={{ backgroundColor: "#071021", height: "100vh" }}
            >
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="adminForm">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
