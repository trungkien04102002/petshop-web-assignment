import React from 'react';
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import ErrorPage from './errorPage';
import { userInfo } from '../api/userApi';

const useAuth=()=>{
    const [user,setUser]= useState();
    var token = localStorage.getItem('user');
   

    useEffect(()=>{
        if(token ===undefined) return false;
        (async () => {
            const res = await userInfo(localStorage.getItem('user')); 
            if(res||res.msg ===undefined)
                setUser(res);
        })()
    },[])
   

    if(user === undefined || user.isAdmin ===0 || user.msg!==undefined) return false;

    return true;
}


const ProtectedRoutes = () => {
    const isAuth =useAuth();
    return isAuth ?<Outlet/> :<ErrorPage/>
}

export default ProtectedRoutes;
