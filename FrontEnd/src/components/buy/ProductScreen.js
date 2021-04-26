import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ProductScreen = ({ history }) => {
    const uid = JSON.parse(localStorage.getItem('uid'));

    const [products, setProduct] = useState([]);

    const getProductClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${JSON.parse(localStorage.getItem('uid'))}/products`);
        const body = await resp.json();
        setProduct(body.buy);
    }

    useEffect(() => {
        getProductClient();
    }, []);

    const deleleProductId = (id) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'A purchase has been added',
            showConfirmButton: false,
            timer: 1500
        })
        deleteProduct(id);
        history.push('/ProductScreen');
    }

    const deleteProduct = async (id) => {
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products/${id}`, {
            method: 'PUT'
        });
        const body = await resp.json();
    }

    return (
        <>
            {
                products.length > 0
                    ?
                    <div className="container">
                        <div className="card mt-3">
                            {
                                products.map((item) => {
                                    return (
                                        <div className="row g-0" key={item._id}>
                                            <div className="col-md m-4">
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                            </div>
                                            <div className="col-md-7 m-2">
                                                <div className="card-body">
                                                    <h5 className="card-title">Name: {item.name}</h5>
                                                    <h6><strong>Category: {item.category} </strong></h6>
                                                    <p className="card-text">Description: {item.description}</p>
                                                    <p className="card-text">Price: {item.price}</p>
                                                    <p className="card-text">Amount: {item.amount}</p>
                                                    <hr />
                                                </div>
                                                <button onClick={() => deleleProductId(item._id)} className="btn btn-warning btn-sm btn-block">Remover from my list</button>
                                                {/* <Link to={`/delete/${item._id}`} className="btn btn-outline-warning btn-sm btn-block">Remover from my list</Link> */}
                                                <Link to="/" type="button" className="btn btn-danger btn-sm btn-block">Back</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="card-center mt-3">
                        </div>
                        <h3>You have no purchase</h3>
                        <Link to="/" type="button" className="btn btn-outline-danger btn-sm">Back</Link>
                    </div>
            }
        </>
    )
}
