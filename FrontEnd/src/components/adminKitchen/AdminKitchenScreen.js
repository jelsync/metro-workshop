import React, { useEffect, useState } from 'react'

export const AdminKitchenScreen = () => {
    const [product, setProduct] = useState(null || []);

    useEffect(() => {
        getPoduct();
    }, []);

    const getPoduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`);
        const body = await resp.json();
        setProduct(body);
    }

    return (
        <>
            <div className="container mt-3">
                <table className="table table-hover">
                    <thead>
                        <tr className="table-warning ">
                            <th scope="col-md-3">Name Categoy</th>
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
                                        <i class="bi bi-bag-plus-fill"></i>
                                        <button className="btn btn-xs btn-success">Add</button>
                                        <button className="btn btn-xs btn-info">Edit</button>
                                        <button className="btn btn-xs btn-danger">Delete</button>
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
