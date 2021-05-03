import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { buy } from '../articles/services';
import { getCategories, getProductCategory } from '../buy/services';

export const CategoryScreen = () => {
    let { id } = useParams();

    useEffect(() => {
        getCategoriesList();
    }, []);

    const getProductCategoryList = async () => {
        const resp = await getProductCategory(id);
        const body = await resp.json();
        setCategory(body);
    }
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState();

    let productsFront = category.map(item => {
        return {
            ...item,
            productId: item._id
        };
    });
    useEffect(() => {
        getProductCategoryList();
    }, []);

    const buyProduct = async (product) => {
        const resp = await buy(product);
        const data = await resp.json();
        getProductCategoryList();
    }

    const getCategoriesList = async () => {
        const resp = await getCategories(id);
        const body = await resp.json();
        setCategories(body);
    }

    const getState = (state) => {
        if (state) {
            return (
                <button className="btn btn-success btn-block">
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
            <div className="container mt-4">
                {
                    <h1 className="display-4 text-blue text-center bg-dark">{categories && categories.name}</h1>
                }
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
                                                <p className="card-subtitle mb-2"><font size="3" color="Navy">Description:</font> {item.description}</p>
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
