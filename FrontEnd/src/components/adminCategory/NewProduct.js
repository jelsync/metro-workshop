import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

export const NewProduct = () => {
    useEffect(() => {
        getCategory();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
    }

    const [values, handleInputChange, reset] = useForm({
        name: '',
        categoryId: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: '',
        amount: 1
    });

    const { name, price, description, quantityInStock, urlImg, category: categoryId } = values || {};
    console.log(values);

    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategories(body);
    }

    const createProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        console.clear();
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
