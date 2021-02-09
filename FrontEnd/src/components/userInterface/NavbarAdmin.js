import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarAdmin = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle m-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </a>
                        <div className="dropdown-menu dropdown-menu-right m-2" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Logout</a>
                            <a className="dropdown-item" href="#">Perfil</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
