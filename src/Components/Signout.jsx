import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import * as types from "../Redux/Auth/actionTypes";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const firebaseConfig = {
        apiKey: "AIzaSyDGKN7RUU8IpGMvi0oAS-8sadGqJd-lD2U",
        authDomain: "zara-9999.firebaseapp.com",
        projectId: "zara-9999",
        storageBucket: "zara-9999.appspot.com",
        messagingSenderId: "532676684448",
        appId: "1:532676684448:web:d5b70ba816712ceb1137c5",
        measurementId: "G-QSBCWYJE23"
    };
    const app = initializeApp(firebaseConfig);
    const handleSignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch({ type: types.GET_SIGNOUT_SUCCESS })
            navigate('/');
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <p onClick={handleSignout}>LOGOUT</p>
    )
}

export default Signout