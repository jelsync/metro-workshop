import React from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


export const Delete = () => {
    const { id } = useParams();

    const deleteProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();

        // if (body.ok) {
        //     // console.log('Eliminado');
        //     Swal.fire('Elimiado', body );
        // }
    }    

    const deleteClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();
    }    

    deleteProduct();
    deleteClient();
    return (
        <div>
            <h1>Eliminado</h1>

            {/* <button onClick={deleteProduct} >Eliminar</button> */}
        </div>
    )
}
