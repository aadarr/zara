import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import * as types from "../Redux/Auth/actionTypes";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../firebase/config';
const Signout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

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