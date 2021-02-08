import React from 'react';
import { useParams } from "react-router-dom";

export const FormProduct = () => {

    console.log(useParams());
    // const id = useParams();

    const handleSubmit = (e) => {
        e.defaultPrevent();

    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                        <div className="box">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend>Creater a Product</legend>
                                    <div className="form-group row">
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name.."
                                        // value="{name}"
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            className="form-control"
                                            placeholder="Description.."
                                        // value={description}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="form-control"
                                            placeholder="Price.."
                                        // value={price}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Spent</label>
                                        <input
                                            type="text"
                                            name="spent"
                                            className="form-control"
                                            placeholder="Spent.."
                                        // value={spent}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Name Category</label>
                                        <input
                                            type="text"
                                            name="NameCategory"
                                            className="form-control"
                                            placeholder="Name Category..."
                                        // value={NameCategory}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity In Stock</label>
                                        <input
                                            type="text"
                                            name="QIS"
                                            className="form-control"
                                            placeholder="Quantity In Stock..."
                                        // value={QuantityInStock}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Url Image</label>
                                        <i nput
                                            type="text"
                                            name="urlImg"
                                            className="form-control"
                                            placeholder="Url Image"
                                        // value={urlImg}
                                        // onChange={handleInputChange} 
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create a Product</button>
                                    <button type="button" className="btn btn-danger">Back</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
