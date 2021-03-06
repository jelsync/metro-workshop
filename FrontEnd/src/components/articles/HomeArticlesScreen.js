import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProducts, buy } from './services';
import "../../styles/carousel.css";

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
    const getCategoriesList = async () => {
        const resp = await getCategories();
        const body = await resp.json();
        setCategories(body);
    }
    const getProductsList = async () => {
        const resp = await getProducts();
        const body = await resp.json();
        setProducts(body.products);
    }

    const buyProduct = async (product) => {
        const resp = await buy(uid, product);
        getProductsList();
    }

    useEffect(() => {
        getCategoriesList();
    }, []);

    useEffect(() => {
        getProductsList();
    }, []);

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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={'/assets/img/5.jpg'} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={'/assets/img/4.jpg'} alt="Third slide" />
                    </div>
                </div>
            </div>
            <Link to="/ProductScreen" className="btn btn-dark m-3" >My shopping cart</Link>
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    {
                        productsFront.map((item) => {
                            return (
                                <div key={item.productId} className="col-md-2 m-1 text-dark" >
                                    <div className="col--md-3 m-1">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title"><kbd>{item.name}</kbd></h4>
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                                <hr />
                                                <h6 className="card-subtitle mb-2 font-weight-bold text-danger"><font size="4" color="red">P</font><font size="3"></font><font size="4">rice: </font><mark>$ {item.price}</mark></h6>
                                                <p className="card-text mb-2"><font size="3" color="Navy">Description:</font> {item.description}</p>
                                                <h6 className="card-text" ><strong>Category: </strong><em>{item.category}</em></h6>
                                                <Link to={`/BuyScreen/${item.productId}`} className="btn btn-link btn-block">More Info</Link>
                                                <div onClick={() => buyProduct(item)}>{getState(item.spent)}</div>
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
