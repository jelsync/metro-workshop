import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import axios from 'axios'

export const NewProduct = () => {
    useEffect(() => {
        getCategory();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
        // if (formValid()) {
        //     console.log('ok');
        // }

    }

    const [values, handleInputChange, reset] = useForm({
        name: '',
        categoryId: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: '',
        spent: '',
        amount: 1
    });

    const { name, price, description, quantityInStock, urlImg, spent, category: categoryId } = values || {};
    console.log(values);

    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategories(body);
    }

    const formValid = () => {
        if (name.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a name',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (description.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a description',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        }
        // } else if (price > 0) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Price must be greater than zero',
        //         icon: 'error',
        //         message: 'error',
        //         confirmButtonText: 'Ok'
        //     })
        //     return false;
        // } else if (quantityInStock >= 0) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Quantity In Stock must be greater than or equal to zero',
        //         icon: 'error',
        //         message: 'error',
        //         confirmButtonText: 'Ok'
        //     })
        //     return false;
        // } else if (spent.trim().length === 0) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'You must enter a Last Name',
        //         icon: 'error',
        //         message: 'error',
        //         confirmButtonText: 'Ok'
        //     })
        //     return false;
        // } else if (urlImg.trim().length === 0) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'You must enter a Last Name',
        //         icon: 'error',
        //         message: 'error',
        //         confirmButtonText: 'Ok'
        //     })
        //     return false;
        // } else if (categoryId.trim().length === 0) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'You must enter a Last Name',
        //         icon: 'error',
        //         message: 'error',
        //         confirmButtonText: 'Ok'
        //     })
        //     return false;
        // }
        return true;
    }
    const createProduct = async () => {
        console.clear();
        console.log(values);

        // const res = axios.post(`http://localhost:4000/api/product`,  values);
        // console.log(res);

        // if (res.status == 200) {
        //     reset();
        // }

        const resp = await fetch(`http://localhost:4000/api/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        //const body = await resp.json();
        console.log(resp);
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend>Create a Product</legend>
                                    <div className="form-group row">
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name.."
                                            value={name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            className="form-control"
                                            placeholder="Description.."
                                            value={description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="text"
                                            name="price"
                                            className="form-control"
                                            placeholder="Price.."
                                            value={price}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Spent</label>
                                        <input
                                            type="text"
                                            name="spent"
                                            className="form-control"
                                            placeholder="Spent.."
                                            value={spent}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Name Category</label>
                                        <select
                                            name="categoryId"
                                            className="form-control form-control-sm"
                                            onChange={handleInputChange}
                                        >
                                            <option value="0">Seleccione categoria</option>

                                            {
                                                categories && categories.map((item) => {
                                                    return (
                                                        <option key={item._id} value={item._id}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity In Stock</label>
                                        <input
                                            type="text"
                                            name="quantityInStock"
                                            className="form-control"
                                            placeholder="Quantity In Stock..."
                                            value={quantityInStock}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Url Image</label>
                                        <input
                                            type="text"
                                            name="urlImg"
                                            className="form-control"
                                            placeholder="Url Image"
                                            value={urlImg}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-info btn-sm btn-block">Create</button>
                                    <Link to="/admin/AdminRoom" type="button" className="btn btn-danger btn-sm btn-block">Back</Link>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
