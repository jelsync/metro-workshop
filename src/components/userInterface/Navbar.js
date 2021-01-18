import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar ">
            <div className="container-fluid">
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
                </div>
            </div>
        </nav>
    )
}
