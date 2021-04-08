import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const ProductScreen = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));

    const [products, setProduct] = useState([]);

    const getProductClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${JSON.parse(localStorage.getItem('uid'))}/products`);
        const body = await resp.json();
        setProduct(body.buy);
        // console.log(body.buy);
    }

    // const [buy, setBuy] = useState([]);
    // setBuy(products);
    console.log(products);

    // const [name] = buy;
    // console.log(name);
    useEffect(() => {
        getProductClient();
    }, []);

    let bol = !true;
    return (
        <>
            <div className="container">
                <div className="card mt-3">
                    {
                        products.map((item) => {
                            return (
                                <div className="row g-0">
                                    <div className="col-md m-4">
                                        <img src={item.urlImg} width="400px" className="img-fluid"/>
                                    </div>
                                    <div className="col-md-7 m-2">
                                        <div className="card-body">
                                            <h5 className="card-title">Name: {item.name}</h5>
                                            <h6><strong>Category: {item.nameCategory} </strong></h6>
                                            <p className="card-text">Description: {item.description}</p>
                                            <p className="card-text">Price: {item.price}</p>
                                            <hr />
                                        </div>
                                        <Link to={`/delete/${item.id}`} className="btn btn-outline-danger btn-sm btn-block">Remover from my list</Link>
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
