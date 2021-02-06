import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { clientLogin } from '../../auth/clientAuth';
import { types } from '../../types/types';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);

    const [values, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password} = values;

    const addClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                email
            }),
        });

        const body = await resp.json();
        localStorage.setItem('body', JSON.stringify (body._id));
        
    }
    
    // const [body, setBody] = useState(addClient)
    // const {name} = body;
    
    const handleSubmit = (e) => {
        // clientLogin(email, password);
        e.preventDefault();
        // console.log(body);
        dispatch({
            type: types.login,
            // payload: localStorage.setItem('user', JSON.stringify (user.uid))
        });
    }
        

    useEffect(() => {
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form>
                        {/* <form onSubmit={handleSubmit}> */}
                            <fieldset>
                                <legend>Login User</legend>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email.."
                                        value={email}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Login user</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
