import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { clientLogin } from '../../auth/clientAuth';
import { types } from '../../types/types';
import { useForm } from '../hooks/useForm';

export const LoginAdminScreen = () => {
    // const history = useHistory();
    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        // getUser();
        // addUser();
    }, [])

    const [values, handleInputChange] = useForm({
        // email: '',
        email: 'jelsyn@gmail.es',
        password: '123456',
        // password: '',
    });

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        clientLogin(email, password);        
        dispatch({
            type: types.login,
            payload: {
                status: 'registro'
            }
        });

        // addUser();
        // console.log(values);
        // clientLogin(email, password);
        // history.replace('/admin');
    }

    const getUser = async () => {

        const resp = await fetch(`http://localhost:4000/api/user-admin`);
        const body = await resp.json();

        console.log(body);
    }

    const addUser = async () => {
        const resp = await fetch(`http://localhost:4000/api/user-admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        const body = await resp.json();
        localStorage.setItem('admin', JSON.stringify(body.user.administrator));
        console.log(body);
    }
    // const login = () => {
    //     return console.log(email, password);

    // }
    return (
        <div className="login-wrap mt-3">
            <div className="login-html">
                <label className="tab">Sign In Administrator</label>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="sign-in-html mt-5">
                        <div className="group">
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="text"
                                className="input"
                                value={email}
                                onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input"
                                value={password}
                                onChange={handleInputChange} />
                        </div>
                        <div className="group mt-4">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
