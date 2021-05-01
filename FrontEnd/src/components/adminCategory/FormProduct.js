import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

export const FormProduct = ({ history }) => {
    useEffect(() => {
        getProduct();
        getCategory();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        editProduct();
    }

    const { id } = useParams();

    const [values, handleInputChange, loadDataForm, reset] = useForm({
        name: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: ''
    });

    const { name, description, price, quantityInStock, urlImg } = values;
    console.log(values);

    const getProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`);
        const body = await resp.json();
        loadDataForm(body);
    }

    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategories(body);
    }

    const editProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                description: values.description,
                price: values.price,
                quantityInStock: values.quantityInStock,
                urlImg: values.urlImg
            }),
        });
        const body = await resp.json();
        if (body.nModified == 1) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product edited successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset();
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="login-area col col-lg-6 col-md-8 col-sm-11">
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
                                    <button type="submit" className="btn btn-outline-info btn-sm mr-2">Aceppt</button>
                                    <Link to={`/Admin/AdminCategoryScreen/`} type="button" className="btn btn-outline-danger btn-sm">Back</Link>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
