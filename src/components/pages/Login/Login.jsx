import React from "react";
import "./Loin.css";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { adduser } from "../../../Utils/userinfo";
import Navbar from "../../Navbar/Navbar";
import LoginNavbar from "./LoginNavbar";

const initial = {
    email: "",
    password: "",
};

const Login = ({ islogedin}) => {
    const [values, setValues] = useState(initial);
    const [erros, setErrors] = useState(false);
    const navigate = useNavigate();


    const inputvalue = (e) => {
        const { name, value } = e.target;

        setValues((state) => ({ ...state, [name]: value }));
    };


    const handleData = (e) => {
        e.preventDefault();
        if (values.email !== '' && values.password !== '') {
            if (values.email.length >= 8 && values.password.length >= 8) {
                if (values.email === values.password) {
                    localStorage.setItem("userName", values.email)
                    localStorage.setItem("password", values.password)
                    localStorage.setItem('isloggedIn', true);
                    navigate('/dashboard');
                }
                else {
                    alert('Please enter valid credentials!')
                }
            } else {
                alert('Username and Password must have 8 characters.')
            }
        }
    };

    return (
        <>
        <LoginNavbar/>
        <div className="container form-box">
            <div className="row">
                <h1>Welcome to Dashboard, Login</h1>

                <form action="" onSubmit={handleData}>
                    <label htmlFor="">Username</label>
                    <TextField
                        id="filled-basic"
                        variant="filled"
                        onChange={inputvalue}
                        value={values.email}
                        name="email"
                    />

                    <label htmlFor="">Password</label>
                    <TextField
                        id="filled-basic"
                        variant="filled"
                        onChange={inputvalue}
                        name="password"
                    />

                    <button id="login-btn " className="btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;
