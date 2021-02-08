import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const Delete = () => {
    const { id } = useParams();

    useEffect(() => {
            deleteProduct();
    }, [id])
        
    const deleteProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'DELETE'
        });
    
        // const body = await resp.json();
    }    
    return (
        <div>
            <h1>Eliminado</h1>
        </div>
    )
}
