import React from 'react'
import { userLogin } from '../../auth/userAuth';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {

    const [values, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password} = values;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        userLogin(email, password);
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form onClick={handleSubmit}>
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
