import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { clientLogin } from '../../auth/clientAuth';
import { types } from '../../types/types';
import { useForm } from '../hooks/useForm';

export const LoginScreen = ({history}) => {
    const { dispatch } = useContext(AuthContext);

    const [values, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = values;

    // const addClient = async () => {
    //     const resp = await fetch(`http://localhost:4000/api/client`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             password,
    //             email
    //         }),
    //     });

    //     const body = await resp.json();
    //     localStorage.setItem('body', JSON.stringify (body._id));

    // }

    // const [body, setBody] = useState(addClient)
    // const {name} = body;


    const handleSubmit = (e) => {
        e.preventDefault();
        clientLogin(email, password);
        // dispatch({
        //     type: types.login,
        //     payload:{
        //         name: 'jelsyn'
        //         // payload: localStorage.setItem('user', JSON.stringify (user.uid))
        //     }
        // });

        // history.replace('/');
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
