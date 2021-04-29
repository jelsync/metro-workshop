import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const HomeArticlesScreen = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    let productsFront = products.map(item => {
        return {
            ...item,
            productId: item._id
        };
    });
    // console.log(productsFront);
    const getClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${JSON.parse(localStorage.getItem('uid'))}`);
        const body = await resp.json();
    }

    const getCategories = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategories(body);
    }
    const getProducts = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`);
        const body = await resp.json();
        setProducts(body.products);
    }

    const buy = async (product) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Purchased product',
            showConfirmButton: false,
            timer: 1500
        });
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        });
        const data = await resp.json();
    }

    useEffect(() => {
        getCategories();
        getProducts();
        getState();
    }, [])

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
            <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={'./assets/img/1.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={'./assets/img/4.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={'./assets/img/5.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            <Link to="/ProductScreen" className="btn btn-dark m-3" >My Product</Link>
            <div className="container mt-4">
                <div className="row justify-content-md-center">
                    {
                        productsFront.map((item) => {
                            return (
                                <div key={item.productId} className="col-md-3 m-1 text-dark" >
                                    <div className="col home-area m-1">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title"><kbd>{item.name}</kbd></h4>
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                                <hr />
                                                <h6 className="card-subtitle mb-2 font-weight-bold text-danger"><font size="4" color="red">P</font><font size="3"></font><font size="4">rice: </font><mark>$ {item.price}</mark></h6>
                                                <p className="card-text mb-2"><font size="3" color="Navy">Description:</font> {item.description}</p>
                                                <h6 className="card-text" ><strong>Category: </strong><em>{item.category}</em></h6>
                                                <Link to={`/BuyScreen/${item.productId}`} className="btn btn-link btn-block">More Info</Link>
                                                {/* <Link to={`/infoProduct`} className="btn btn-link btn-block">More Info</Link> */}
                                                <div onClick={() => buy(item)}>{getState(item.spent)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
