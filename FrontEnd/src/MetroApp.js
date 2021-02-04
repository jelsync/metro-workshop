import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { UserContext } from './components/hooks/UserContext';

export const MetroApp = () => {

    // const {email, name, lastName, uid} = userLogin(); 
    // const {user} = userLogin(); 
    // JSON.parse(localStorage.getItem('user', JSON.stringify (user.uid)));

    // console.log(uid);
    return (
            <UserContext.Provider value = {'useruid'}>
            <AppRouter/>
            </UserContext.Provider>
    )
}