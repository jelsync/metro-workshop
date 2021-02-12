import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const AdminRoomScreen = () => {
    const [product, setProduct] = useState(null || []);
    useParams();
    // const [product, setProduct] = useState(null || []);
    // const category = getCategoryProduct(categories);

    useEffect(() => {
        getPoducts();
    }, []);

    const getPoducts = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`);
        const body = await resp.json();
        setProduct(body);
    }
    return (
        <div className="mt-2">
            <table className="table table-hover">
                <thead>
                    <tr className="table-info">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Name Category</th>
                        <th scope="col" >Quantity In Stock</th>
                        <th scope="col">Spent</th>
                        <th scope="col" >Url Imagen</th>
                        <th scope="col" width="100%">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product && product.map((item,i) => (
                            <tr key={item._id}>
                                <th scope="row">{i+1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.nameCategory}</td>
                                <td>{item.quantityInStock}</td>
                                <td>{item.spent}</td>
                                <td >{item.urlImg}</td>
                                <td width="100%">
                                <Link to={`/admin/product/edit/${item._id}`} className="btn btn-outline-info btn-sm btn-block">Edit</Link>
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
