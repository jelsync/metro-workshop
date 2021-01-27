import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarAdmin = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-end">
            <ul className="nav">
                <li className="nav nav-item">
                    <Link className="nav-link" href="#" aria="true"><h3>User</h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#" aria="true"><h3>Logout </h3></Link>
                </li>
            </ul>
        </nav>
    )
}