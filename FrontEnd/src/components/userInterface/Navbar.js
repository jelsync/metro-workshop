import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { LogOutUser } from '../../auth/clientAuth';
import { types } from '../../types/types';
import { getClient } from '../adminClient/services';
import { getCategories } from '../articles/services';

export const Navbar = () => {
    const { dispatch } = useContext(AuthContext);

    const id = JSON.parse(localStorage.getItem('uid'));
    const email = JSON.parse(localStorage.getItem('email'));

    const getClientList = async () => {
        const resp = await getClient(id);
        const body = await resp.json();
        let { client } = body;
        setBody(client);
    }

    useEffect(() => {
        getClientList();
    }, []);

    const [body, setBody] = useState({});

    const [category, setCategory] = useState([]);

    const handleLogout = () => {
        LogOutUser();
        dispatch({
            type: types.logout
        });
    }

    const getCategory = async () => {
        const resp = await getCategories();
        const body = await resp.json();
        setCategory(body);
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary navbar mt-2">
            <Link to="/" className="navbar-brand">
                <img src={'/assets/img/1.png'} style={{ width: 70, marginTop: -7 }} alt="MetroShop" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/"><h4> Home </h4></Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
                </ul>
                <div className="d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link btn" > Welcome {email} </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link btn ml-4" onClick={() => handleLogout()}>
                            LogOut
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
