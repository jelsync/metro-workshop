import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductCategory, deleteProduct } from '../adminCategory/services';

export const AdminCategoryScreen = () => {
    useEffect(() => {
        getProductCategoryList();
    }, []);

    let { id } = useParams();
    const [category, setCategory] = useState();

    const getProductCategoryList = async () => {
        const resp = await getProductCategory(id);
        const body = await resp.json();
        setCategory(body);
    }

    const deleteProductId = async (id) => {
        const resp = await deleteProduct(id);
        getProductCategoryList();
    }
    const getState = (state) => {
        if (state) {
            return (
                <div className="alert alert-success" >
                    Disponible
                </div>
            )
        } else {
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
                <Link to={`/admin/createProduct`} className="btn btn-outline-info btn-sm btn-block">Crear New Product</Link>
                <div className="col-lg-12 col-md-12 mt-2">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-info ">
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
                                category && category.map((item, i) => (
                                    <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantityInStock}</td>
                                        <td>{getState(item.spent)}</td>
                                        <td > <img src={item.urlImg} width="80px" className="img-fluid" alt="img" /></td>
                                        <td>
                                            <Link to={`/admin/product/edit/${item._id}`} className="btn btn-info btn-sm btn-block">Edit</Link>
                                            <button onClick={() => deleteProductId(item._id)} className="btn btn-danger btn-sm btn-block">Delete</button>
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
