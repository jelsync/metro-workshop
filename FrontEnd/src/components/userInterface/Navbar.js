import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { LogOutUser } from '../../auth/clientAuth';
import { types } from '../../types/types';

export const Navbar = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();

    const id = JSON.parse(localStorage.getItem('uid'));

    const getClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${id}`);
        const body = await resp.json();
        let { client } = body;
        setBody(client);
    }

    useEffect(() => {
        getClient();
    }, []);

    const [body, setBody] = useState({});

    const [category, setCategory] = useState([]);

    const handleLogout = () => {
        history.replace('/login');
        LogOutUser();
        dispatch({
            type: types.logout
        });
    }

    const getCategory = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategory(body);
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary navbar mt-2">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={'/assets/img/1.png'} style={{ width: 70, marginTop: -7 }} alt="MetroShop" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page">
                            <h4>
                                Home
                            </h4>
                        </Link>
                        {
                            category.map((item) => {
                                return (
                                    <div key={item._id}>
                                        <h4>
                                            <Link to={`/CategoryScreen/${item._id}`} className="nav-link" key={item._id} >
                                                {item.name}
                                            </Link>
                                        </h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="d-flex justify-content-end w-100">
                        <ul className="navbar-nav">
                            <li
                                className="nav-item nav-link btn"
                            >
                                {/* Welcome {name} */}
                            </li>
                            <button
                                className="nav-item nav-link btn"
                                onClick={handleLogout}
                            >
                                LogOut
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
