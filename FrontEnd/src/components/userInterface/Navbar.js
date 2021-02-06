import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    // console.log(id);
    const id = JSON.parse(localStorage.getItem('body'));
    
    useEffect(() => { 
        getClient(id);
    }, [useState])
    // localStorage.setItem('body', JSON.stringify (body._id));
    
    const getClient = async (id) => {
        const resp = await fetch(`http://localhost:4000/api/client/${id}`);
        const body = await resp.json();
        // console.log(body._id);
        setBody(body);
    }
    
    const [body, setBody] = useState(getClient)

    const {name} = body;

    const handleLogout = () =>{
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary navbar mt-2">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={'./assets/img/1.png'} style={{ width: 70, marginTop: -7 }} alt="..." />
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
                        <Link to="/KitchenScreen" className="nav-link" >
                            <h4>
                                Kitchen
                            </h4>
                        </Link>
                        <Link to="/RoomScreen" className="nav-link" >
                            <h4>
                                Room
                            </h4>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-end w-100">
                        <ul className="navbar-nav">
                            <li
                                className="nav-item nav-link"
                            >
                                {name}
                            </li>
                            <button
                                type="submite"
                                className="btn nav-item nav-link"
                            >
                                LogOut
                            </button>
                            <ul className="navbar-nav">
                        </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
