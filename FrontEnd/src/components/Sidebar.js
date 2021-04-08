import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Metro WorkShop</div>
            <div className="list-group list-group-flush">
                <Link to="/admin/kitchen" className="list-group-item list-group-item-action bg-light">Kitchen</Link>
                <Link to="/admin/adminRoom" className="list-group-item list-group-item-action bg-light">Room</Link>
                <Link to="/admin/client" className="list-group-item list-group-item-action bg-light">Client</Link>
            </div>

        </div>
    )
}
