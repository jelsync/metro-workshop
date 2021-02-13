import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const AdminClientScreen = () => {
    const [client, setClient] = useState(null || []);
    // useParams();
    // const [product, setProduct] = useState(null || []);
    // const category = getCategoryProduct(categories);

    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () => {
        const resp = await fetch(`http://localhost:4000/api/client`);
        const body = await resp.json();
        setClient(body);
    }
    return (
        <div className="container mt-3">
            <table className="table table-hover">
                <thead>
                    <tr className="table-warning">
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">password</th>
                        <th scope="col">Buys</th>
                        <th scope="col" width="100%">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                        client && client.map((item,i) => (
                            <tr key={item._id}>
                                <th scope="row">{i+1}</th>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.buy}</td>
                                <td width="100%">
                                <Link to={`/admin/client/edit/${item._id}`} className="btn btn-outline-info btn-sm btn-block">Edit</Link>
                                <Link to={`/admin/delete/${item._id}`} className="btn btn-outline-danger btn-sm btn-block">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

