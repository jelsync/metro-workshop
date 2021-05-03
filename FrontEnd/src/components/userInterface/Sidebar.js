import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../articles/services';

export const Sidebar = () => {
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        const resp = await getCategories();
        const body = await resp.json();
        setCategory(body);
    }

    useEffect(() => {
        getCategory();
    }, [])

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Metro WorkShop</div>
            <div className="list-group list-group-flush">
                <Link to="/admin/client" className="list-group-item list-group-item-action bg-light">Client</Link>
                {
                    category.map((item) => {
                        return (
                            <div key={item._id} >
                                <Link to={`/admin/AdminCategoryScreen/${item._id}`} className="list-group-item list-group-item-action bg-light">{item.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
