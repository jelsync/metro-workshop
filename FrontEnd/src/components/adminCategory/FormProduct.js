import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { getCategory, getProduct, editProduct } from './services';

export const FormProduct = () => {
    useEffect(() => {
        getProductId();
        getCategoryList();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        editProductId();
    }

    const { id } = useParams();

    const [values, handleInputChange, loadDataForm] = useForm({
        name: '',
        description: '',
        price: '',
        quantityInStock: '',
        urlImg: ''
    });

    const { name, description, price, quantityInStock, urlImg } = values;

    const getProductId = async () => {
        const resp = await getProduct(id);
        const body = await resp.json();
        loadDataForm(body);
    }

    const [categories, setCategories] = useState([]);

    const getCategoryList = async () => {
        const resp = await getCategory();
        const body = await resp.json();
        setCategories(body);
    }

    const editProductId = async () => {
        const resp = await editProduct(id, values);
        handleGameClick();
    }
    const back = () => {
        window.history.back()
    }
    const [disabled, setDisabled] = useState(false);

    const handleGameClick = () => {
        setDisabled(!disabled);
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
                                            disabled={disabled}
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
                                            disabled={disabled}
                                            className="form-control form-control-sm"
                                            placeholder="Description.."
                                            value={description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            min="1"
                                            name="price"
                                            disabled={disabled}
                                            className="form-control form-control-sm"
                                            placeholder="Price.."
                                            value={price}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity In Stock</label>
                                        <input
                                            type="number"
                                            min="0"
                                            name="quantityInStock"
                                            disabled={disabled}
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
                                            disabled={disabled}
                                            className="form-control form-control-sm"
                                            placeholder="Url Image"
                                            value={urlImg}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-info btn-sm mr-2" onClick={() => handleGameClick} disabled={disabled}>Aceppt</button>
                                    <button onClick={() => back()} type="button" className="btn btn-danger btn-sm">Back</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
