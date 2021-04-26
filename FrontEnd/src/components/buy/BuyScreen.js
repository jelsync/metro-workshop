import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const BuyScreen = () => {
    let { id } = useParams();
    const uid = JSON.parse(localStorage.getItem('uid'));

    const getProduct = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`);
        const body = await resp.json();
        setProduct(body);
    }

    useEffect(() => {
        getProduct();
    }, []);

    const [product, setProduct] = useState({});

    let { description, name, price, quantityInStock, spent, urlImg, category } = product;

    const buy = async (product) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product removed',
            showConfirmButton: false,
            timer: 1500
        })
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        });
        const data = await resp.json();
    }

    const getState = (state) => {
        if (state) {
            return (
                <button className="btn btn-success btn-block" >
                    Buy
                </button>
            )
        } else {
            return (
                <button className="btn btn-secondary btn-block" disabled>
                    Spent
                </button>
            )
        }
    }
    return (
        <>
            <div className="container">
                <div className="card mt-3">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={urlImg} className="img-fluid" />
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                <h4 className="card-title"><kbd>{name}</kbd></h4>
                                <h5 className="card-subtitle mb-2 font-weight-bold text-danger mt-2"><font size="4" color="red">P</font><font size="4">rice: </font><mark>$ {price}</mark></h5>
                                <p className="card-subtitle mt-2"><font size="3" color="black">Category: <em>{category}</em></font></p>
                                <p className="card-text mt-2"><font size="3" color="black">Description:</font><font size="3" color="gray">{description}</font></p>
                                <h5><font size="3" color="black"> Quantity In Stock </font></h5>
                                <p className="card-text"><font size="4" color="red">{quantityInStock}</font></p>
                                <hr />
                            </div>
                            <div onClick={() => buy(id)}>{getState(spent)}</div>
                            <Link to="/" type="button" className="btn btn-danger btn-sm btn-block mt-2">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
