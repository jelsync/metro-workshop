import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { firebase } from '../../firebase/firebase-config';

export const CreateUserScreen = () => {

    const [values, handleInputChange,] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        uid: '',
    });

    const { email, password, name, lastName, uid } = values;
    const formValid = () => {
        if (name.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a name',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (lastName.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a Last Name',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (email.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Enter an email',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (password.trim().length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'The password must be greater than 6 digits',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        }
        return true;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async ({ user }) => {
                    localStorage.setItem('uid', JSON.stringify(user.uid));
                    localStorage.setItem('email', JSON.stringify(user.email));
                    await user.updateProfile({ displayName: name });
                    addClient();
                })
                .catch(e => {
                    Swal.fire('Error', e.message, 'error');
                });
        };
    }

    const addClient = async () => {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: JSON.parse(localStorage.getItem('uid')),
                name,
                lastName,
                password,
                email
            }),
        });
        const body = await resp.json();
        localStorage.setItem('id', JSON.stringify(body._id));
    }

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
                                onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Last Name</label>
                            <input
                                id="pass"
                                name="lastName"
                                type="text"
                                className="input"
                                value={lastName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input
                                id="pass"
                                name="email"
                                type="email"
                                className="input"
                                value={email}
                                onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input
                                id="pass"
                                name="password"
                                type="password"
                                className="input"
                                value={password}
                                onChange={handleInputChange} />
                        </div>
                        <div className="group">
                            <input
                                type="submit"
                                className="button"
                                value="Sign Up" />
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
