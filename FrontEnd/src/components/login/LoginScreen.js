import React  from 'react'
import { Link } from 'react-router-dom';
import { clientLogin } from '../../auth/clientAuth';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {
    const [values, handleInputChange] = useForm({
        email: 'jelsyn@gmail.com',
        password: '123456',
    });

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        clientLogin(email, password);        
    }
    return (
        <div className="login-wrap mt-3">
            <div className="login-html">
                <label className="tab">Sign In</label>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="sign-in-html mt-4">
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
                            onChange={handleInputChange}  />
                        </div>
                        <div className="group mt-4">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <Link to="/create-user">Creater User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
