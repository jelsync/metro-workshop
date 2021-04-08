import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


export const Delete = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));
    const { id } = useParams();
    console.log(`Product ${id}`);
    console.log(`UID ${uid}`);

    const [idUser, setIdUser] = useState();

    const getProductClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${JSON.parse(localStorage.getItem('uid'))}/products`);
        const body = await resp.json();
        setIdUser(body._id);
        console.log(body._id);
    }
    // const {_id} = idUser;
    // console.log(idUser);

    const deleteProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products/${id}`, {
            method: 'PUT'
        });
        const body = await resp.json();
    }    

    deleteProduct();

    return (
        <div>
            <h1>Eliminado</h1>
        </div>
    )
}
