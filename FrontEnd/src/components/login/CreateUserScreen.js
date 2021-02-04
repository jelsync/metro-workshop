import React, { useReducer } from 'react'

import { todoReducer } from '../../auth/todoReducer';
import { userRegister } from '../../auth/userRegister';
import { useForm } from '../hooks/useForm';

const initialState = [{
    name: 'jelsy',
    lastName: 'ceron',
    email: 'jelsync@gmail.com',
    password: 'holaquehace.10'
}];

// return JSON.parse(localStorage.getItem('todos')) || [];


export const CreateUserScreen = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [values, handleInputChange] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });

    const { email, password, name, lastName } = values;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        userRegister(email, password, name, lastName);
    }

    const handleCreate = () => {
        const action = {
            type: 'createUser',
            payload: state
        }
        // console.log(state);
        dispatch(action)
    }


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form onClick={handleSubmit}>
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
        </div>
    )
}
