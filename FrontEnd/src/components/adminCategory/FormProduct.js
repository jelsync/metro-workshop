import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { useParams } from "react-router-dom";
import { useForm } from '../hooks/useForm';

export const FormProduct = () => {
    // const categoryId = JSON.parse(localStorage.getItem('idCate'));

    const handleSubmit = (e) => {
        e.preventDefault();
        editProduct();
        reset();
    }

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        getProduct();
        getCategory();
    })

    const [values, handleInputChange, loadDataForm, reset] = useForm({
        name: '',
        category: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: '',
        spent: ''
    });
    const { name, category, description, price, quantityInStock, urlImg, spent} = values;

    // console.log(values);
    const getProduct = async () => {
        // console.log(id);
        const resp = await fetch(`http://localhost:4000/api/product/${id}`);
        const body = await resp.json();
        // const {name} = !!body && body[0];
        loadDataForm(body);
        // console.log(body);
    }

    const [categories, setCategories] = useState()
    const getCategory = async () => {
        // console.log(id);
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        // const {name} = !!body && body[0];
        setCategories(body);
        // console.log(body);
    }

    const editProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                nameCategory: values.nameCategory,
                description: values.description,
                price: values.price,
                quantityInStock: values.quantityInStock,
                spent: values.spent,
                urlImg: values.urlImg
            }),
        });
        const body = await resp.json();
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                {/* <div className="col col-lg-6 col-md-8 col-sm-11"> */}
                    <div className="box">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Edit a Product</legend>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-sm"
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
                                    className="form-control form-control-sm"
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
                                    className="form-control form-control-sm"
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
                                    className="form-control form-control-sm"
                                    placeholder="Spent.."
                                    value={spent}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Name Category</label>
                                <select
                                    name="category"
                                    className="form-control form-control-sm"
                                    value={category}
                                    onChange={handleInputChange}
                                >
                                    {
                                        categories && categories.map((item) => {
                                            return(
                                                <option key={item._id} value={item.name}>{item.name}</option>
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
                                    className="form-control form-control-sm"
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
                                    className="form-control form-control-sm"
                                    placeholder="Url Image"
                                    value={urlImg}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <button type="submit" className="btn btn-primary">Create</button> */}
                            <button type="submit" className="btn btn-outline-info btn-sm">Aceppt</button>
                            <Link to="/admin/AdminRoom" type="button" className="btn btn-outline-danger btn-sm">Back</Link>
                        </fieldset>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
