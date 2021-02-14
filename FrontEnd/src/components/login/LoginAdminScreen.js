import React from 'react'
import { useForm } from '../hooks/useForm';


export const LoginAdminScreen = () => {
    const [values, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = values;

    const handleSubmit = () =>{

    }

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
                            // value={email}
                            onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input
                            name="password"
                            type="password" 
                            className="input" 
                            // value={password}
                            onChange={handleInputChange}  />
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
