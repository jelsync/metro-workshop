import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { getCategory, newProduct } from './services';

export const NewProduct = () => {
    useEffect(() => {
        getCategoryList();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            createProduct();
        }
    }

    const [values, handleInputChange] = useForm({
        name: '',
        categoryId: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: '',
        amount: 1
    });

    const { name, price, description, quantityInStock, urlImg, category: categoryId } = values || {};

    const [categories, setCategories] = useState([]);

    const getCategoryList = async () => {
        const resp = await getCategory();
        const body = await resp.json();
        setCategories(body);
    }

    const createProduct = async () => {
        const resp = await newProduct(values);
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
        else if (price.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a price for the product',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (values.categoryId.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must select a category',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (quantityInStock.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a quantity In Stock',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        } else if (urlImg.trim().length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'You must enter a url',
                icon: 'error',
                message: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        }
        return true;
    }

    const back = () => {
        window.history.back()
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
                                            type="number"
                                            min="0"
                                            name="price"
                                            className="form-control"
                                            placeholder="Example 9999"
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
                                            type="number"
                                            name="quantityInStock"
                                            min="1"
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
                                    <button type="submit" className="btn btn-info btn-sm btn-block" onClick={() => back()}>Create</button>
                                    <button onClick={() => back()} type="button" className="btn btn-danger btn-sm btn-block">Back</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
