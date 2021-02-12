import React, { useState } from 'react'
import { clientRegister } from '../../auth/clientAuth';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';


export const CreateUserScreen = ({ history }) => {

    const [values, handleInputChange,] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        uid: '',
    });

    const { email, password, name, lastName, uid } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        clientRegister(email, password, name, lastName);
        // addClient();
        history.push('/HomeArticlesScreen'); 
        // const _id = localStorage.setItem('body', JSON.stringify(body._id));
    }

    const addClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid,
                name,
                lastName,
                password,
                email
            }),
        });
        const body = await resp.json();
        setBody(body);
        // console.log(body._id);
        // getClient(body._id);
    }
    const [body, setBody] = useState(addClient)

    return (
        <div className="login-wrap mt-3">
            <div className="login-html">
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="sign-up-html">
                        <div className="group">
                            <label htmlFor="user" className="label">Name</label>
                            <input 
                            id="user"
                            name="name" 
                            type="text" 
                            className="input" 
                            value={name} 
                            onChange={handleInputChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Last Name</label>
                            <input 
                            id="pass" 
                            name="lastName" 
                            type="text" 
                            className="input" 
                            value={lastName} 
                            onChange={handleInputChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input 
                            id="pass" 
                            name="email" 
                            type="email" 
                            className="input" 
                            value={email} 
                            onChange={handleInputChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input 
                            id="pass" 
                            name="password"
                            type="password" 
                            className="input" 
                            value={password} 
                            onChange={handleInputChange}/>
                        </div>
                        <div className="group">
                            <input 
                            type="submit"
                            className="button" 
                            value="Sign Up"/>
                        </div>
                        <div className="foot-lnk">
                            <Link to="/Login">Back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
