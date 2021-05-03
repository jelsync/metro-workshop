import React, { useEffect, useState } from 'react'
import { deleteClient, getClients } from '../adminClient/services';

export const AdminClientScreen = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        getClientsList();
    }, []);

    const getClientsList = async () => {
        const resp = await getClients();
        const body = await resp.json();
        let { clients } = body;
        setClient(clients);
    }

    const [buy] = client;

    const deleteClientId = async (id) => {
        const resp = await deleteClient(id);
        getClientsList();
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
                                                <button onClick={() => deleteClientId(item._id)} className="btn btn-outline-danger btn-sm btn-block">Delete</button>
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

