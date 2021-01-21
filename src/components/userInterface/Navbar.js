import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary navbar mt-2">
            <div className="container">
                <Link to="/" className="navbar-brand" >Metro WorkShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        <Link to="/BedroomScreen" className="nav-link" >Bedroom</Link>
                        <Link to="/KitchenScreen" className="nav-link" >Kitchen</Link>
                        <Link to="/RoomScreen" className="nav-link" >Room</Link>
                        <Link to="OthersScreen" className="nav-link" >Others</Link>
                    </div>
                    <div className="d-flex justify-content-end w-100">
                        <ul className="navbar-nav">
                            <Link to="/login" className="nav-item nav-link"  > Logout</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
