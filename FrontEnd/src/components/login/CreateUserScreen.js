import React, { useEffect, useState } from 'react'
import { clientRegister } from '../../auth/clientAuth';
import { useForm } from '../hooks/useForm';

export const CreateUserScreen = ({ history }) => {
    
    const [values, handleInputChange] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        uid:'',
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
        setBody(body);
        // const body = await resp.json();
        // console.log(body._id);
        // getClient(body._id);
    }
    const [body, setBody] = useState(addClient)
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Creater a User</legend>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name.."
                                        value={name}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last Name.."
                                        value={lastName}
                                        onChange={handleInputChange} />
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
                                <button type="submit" className="btn btn-primary">Create a user</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* {(history.push('/HomeArticlesScreen')) && handleSubmit()} */}
        </div>
    )
}
