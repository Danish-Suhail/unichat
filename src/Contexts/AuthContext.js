import React , { useContext, useEffect, useState, createContext } from "react";
import {auth} from "../Firebase";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>{
    const[loading, setLoading] = useState(true);
    const[user, setUser] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats');
        })
    },[user, history]);

    const value = {user};

    return(
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}