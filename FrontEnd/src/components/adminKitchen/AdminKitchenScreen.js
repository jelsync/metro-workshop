import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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

    const getState = (state) => {
        if (state) {
            return (
                <div className="alert alert-success" >
                    Disponible
                </div>
            )
        }else{
            return (
                <div className="alert alert-danger" >
                    Agotado
                </div>
            )
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 mt-2">
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
                                <th scope="col" >Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product && product.map((item, i )=> (
                                    <tr key={item._id} className="table-active">
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>{item.nameCategory}</td>
                                        <td>{item.quantityInStock}</td>
                                        <td>{getState(item.spent)  }</td>
                                        <td > <img src={item.urlImg} width="80px" className="img-fluid" /></td>
                                        <td>
                                            <Link to={`/admin/product/edit/${item._id}`} className="btn btn-outline-info btn-sm btn-block">Edit</Link>
                                            <Link to={`/admin/delete/${item._id}`} className="btn btn-outline-danger btn-sm btn-block">Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
