import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, buy } from './services';

export const BuyScreen = () => {
    let { id } = useParams();

    const getProductList = async () => {
        const resp = await getProduct(id);
        const body = await resp.json();
        setProduct({
            ...body,
            productId: body._id
        });
    }

    const [product, setProduct] = useState({});
    let { _id, description, name, price, quantityInStock, spent, urlImg, category } = product;

    useEffect(() => {
        getProductList();
    }, [() => buy()]);

    const buyProduct = async (product) => {
        const resp = await buy(product);
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
    const back = () => {
        window.history.back()
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
                                <p className="card-text"><font size="4" color="red"><em>{quantityInStock}</em></font></p>
                                <hr />
                            </div>
                            <div onClick={() => buyProduct(product)}>{getState(spent)}</div>
                            <button onClick={() => back()} type="button" className="btn btn-danger btn-sm btn-block mt-2">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
