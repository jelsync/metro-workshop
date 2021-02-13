import React from 'react'
import { useParams } from 'react-router-dom';

export const Delete = () => {
    const { id } = useParams();

    const deleteProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();
    }    

    deleteProduct();

    // const deleteClient = async () => {
    //     const resp = await fetch(`http://localhost:4000/api/client/products/${id}/delete`, {
    //         method: 'DELETE'
    //     });
    //     const body = await resp.json();
    // }    

    // deleteClient();
    return (
        <div>
            <h1>Eliminado</h1>
        </div>
    )
}
