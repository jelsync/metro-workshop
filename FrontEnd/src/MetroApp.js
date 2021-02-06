import React, { useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('body')) || { logged: false };
}

export const MetroApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}