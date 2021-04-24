import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

export const HomeArticlesScreen = ({ history }) => {
    const uid = JSON.parse(localStorage.getItem('uid'));
    // console.log(uid);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    // let [_id] = products;
    // let { category: categoryId } = _id;
    var productsFront = products.map(item => {
        // console.log(item.category);
        return {
            ...item,
            categoryId: item.category
        };
    });

    const getClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${JSON.parse(localStorage.getItem('uid'))}`);
        const body = await resp.json();
        // setBody(body);
    }

    const getCategories = async () => {
        const resp = await fetch(`http://localhost:4000/api/category`);
        const body = await resp.json();
        setCategories(body);
        // console.log(body);
    }
    const getProducts = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`);
        const body = await resp.json();
        setProducts(body.products);
        // console.log(body.products);
    }

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


    // const {_id} = body;
    // console.log('id Base ' + _id);

    // const uid = JSON.parse(localStorage.getItem('user'));
    // const id = JSON.parse(localStorage.getItem('body'));

    useEffect(() => {
        // getClient();
        getCategories();
        // getIdCategory();
        getProducts();

    }, [])

    // const _id = JSON.parse(localStorage.getItem('body'));
    // const editClient = async (_id) => {
    //     // console.log("HOLA "+_id);
    //     // console.log("HOLA "+id);
    //     const resp = await fetch(`http://localhost:4000/api/client/edit/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             uid:id,
    //         }),

    //     });

    //     // setBody(body);

    //     const body = await resp.json();
    //     // console.log(body);
    // }
    // const [body, setBody] = useState(editClient)

    // localStorage.setItem('body', JSON.stringify (body._id));


    // const {name} = body;
    const handleInfo = () => {
        history.push('/BuyScreen');
        // JSON.parse(localStorage.getItem('user', JSON.stringify ({email, name})));
    }

    const getState = (state) => {
        if (state) {
            return (
                <button className="btn btn-success" >
                    Buy
                </button>
            )
        } else {
            return (
                <button className="btn btn-secondary" disabled>
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
                            // getIdCategory(item.categoryId);
                            // console.log(item.categoryId);
                            return (
                                <div key={item._id} className="col-md-3 m-1 text-dark" >
                                    <div className="col home-area m-1">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{item.name}</h4>
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                                <hr />
                                                <h6 className="card-subtitle mb-2">Price: {item.price}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">Category: {item.categoryId}</h6>
                                                <p className="card-text">{item.description}</p>
                                                <button type="button" className="btn btn-link" onClick={handleInfo}>More info</button>
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
