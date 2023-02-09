import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./LoginRegister.css";
import Button from "react-bootstrap/Button";
import { BASEURL } from "../Constant";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [input, setInput] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Axios.post(`${BASEURL}api/admin/register`, { profilepic: input.profilepic, name: input.name, email: input.email, password: input.password })
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
                        setInput({})
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
            console.log("name", input.name)
            console.log("profile", input.profilepic)
            console.log("email", input.email)
            console.log("password", input.password)
        } catch (error) {
            console.log(error.message)
        }
    };

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
                                    <Form.Label>Profile Photo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Online photo url"
                                        name="profilepic"
                                        id="profilepic"
                                        value={input.profilepic || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        value={input.name || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        value={input.email || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={input.password || ""}
                                        onChange={handleChange}
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

export default Register;
