import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const AdminClientScreen = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () => {
        const resp = await fetch(`http://localhost:4000/api/client`);
        const body = await resp.json();
        let { clients } = body;
        setClient(clients);
    }

    const [buy] = client;

    const deleteClient = async (id) => {
        const resp = await fetch(`http://localhost:4000/api/client/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();
        console.log(body);

        if (body.ok) {
            getClients();
            Swal.fire({
                icon: 'error',
                title: 'Delete',
                text: 'Deleted customer!'
            })
        }
    }

    return (
        <div className="container mt-3">
            <div className="row" >
                <div className="col-lg-12 col-md-12" >
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-warning">
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Buys</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                client.map((item, i) => {
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.buy.length}</td>
                                            <td>
                                                <button onClick={() => deleteClient(item._id)} className="btn btn-outline-danger btn-sm btn-block">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

