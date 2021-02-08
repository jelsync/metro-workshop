import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AdminRoomScreen = () => {
    const [product, setProduct] = useState(null || []);

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
        <>
            <div className="container mt-3">
                <Link to="/admin/AdminRoom/product/new" className="btn btn-xs btn-success">New Product</Link>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-warning ">
                            <th scope="col-md-3">Name Category</th>
                            <th scope="col">Name Articles</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity In Stock</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Number Of Order</th>
                            {/* <th scope="col">Spent</th> */}
                            <th scope="col">Delet/Edit/Create</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product && product.map(item => (
                                <tr key={item._id} className="table-active">
                                    <td >{item.nameCategory}</td>
                                    <td >{item.name}</td>
                                    <td >{item.description}</td>
                                    <td >{item.price}</td>
                                    <td >{item.quantityInStock}</td>
                                    <td >{item.urlImg}</td>
                                    <td >Empty</td>
                                    {/* <td >{item.spent}</td> */}
                                    <td >
                                        <Link to={`/admin/AdminRoom/product/${item._id}`} className="btn btn-xs btn-info">Edit</Link>
                                        <Link to={`/admin/AdminRoom/product/${item._id}`} className="btn btn-xs btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
