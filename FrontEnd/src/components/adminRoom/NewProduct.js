import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const NewProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
        reset();
        console.log(values);
    }

    const [values, handleInputChange, reset] = useForm({
        name: '',
        nameCategory: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: '',
        spent: ''
    });

    const { name, nameCategory, description, price, quantityInStock, urlImg, spent } = values;
    console.log(name);

    const createProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            }),
        });

        const body = await resp.json();
        console.log(body);
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
                                        <input
                                            type="text"
                                            name="nameCategory"
                                            className="form-control"
                                            placeholder="Name Category..."
                                            value={nameCategory}
                                            onChange={handleInputChange}
                                        />
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
                                    <button type="submit" className="btn btn-primary">Create</button>
                                    <Link to="/admin/AdminRoom" type="button" className="btn btn-danger">Back</Link>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
