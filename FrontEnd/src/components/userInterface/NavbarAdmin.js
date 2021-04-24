import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { LogOutUser } from '../../auth/clientAuth';
import { types } from '../../types/types';

export const NavbarAdmin = () => {
    const history = useHistory();

    const { user: { email }, dispatch } = useContext(AuthContext);
    const handleLogout = () => {
        history.replace('/admin/login');
        LogOutUser();
        dispatch({
            type: types.logout
        });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <Link className="dropdown-item" to="">{email}</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="btn btn-outline-info" to="/admin" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
