import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getProductClient, deleteProduct, updateProduct } from "../buy/services";

export const ProductScreen = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));

    const getProductClientId = async () => {
        const resp = await getProductClient(uid);
        const body = await resp.json();
        let { buy } = body;
        setProduct(buy);
    }

    const [products, setProduct] = useState([]);

    let productsFront = products.map(item => {
        return {
            ...item,
            counter: item.amount,
            id: item._id
        };
    });

    useEffect(() => {
    }, [() => allFunction()]);

    useEffect(() => {
        getProductClientId();
    }, []);

    const deleteProductId = async (id) => {
        const resp = await deleteProduct(uid, id);
        const body = await resp.json();
        getProductClientId();
    }

    const updateProductId = async (product, id) => {
        const resp = await updateProduct(product, id);
        const data = await resp.json();
    }

    const allFunction = (id, product) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Removed',
            showConfirmButton: false,
            timer: 1500
        })
        deleteProductId(id);
        updateProductId(product, id);
        getProductClientId(id);
    }
    const back = () => {
        window.history.back()
    }
    return (
        <>
            {
                productsFront.length > 0
                    ?
                    <div className="container">
                        <button onClick={() => back()} type="button" className="btn btn-danger btn-sm mt-3">Back</button>
                        <div className="card mt-3">
                            {
                                productsFront.map((item) => {
                                    return (
                                        <div className="row g-0" key={item._id}>
                                            <div className="col-md m-4">
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                            </div>
                                            <div className="col-md-7 m-2">
                                                <div className="card-body">
                                                    <h4 className="card-title"><kbd>{item.name}</kbd></h4>
                                                    <hr />
                                                    <h6 className="card-subtitle mb-2 font-weight-bold text-danger"><font size="4" color="red">P</font><font size="3"></font><font size="4">rice: </font><mark>$ {item.price}</mark></h6>
                                                    <p className="card-subtitle mb-2"><font size="3" color="Navy">Description:</font> <font size="3" color="black">{item.description}</font></p>
                                                    <h6><font size="3" color="black"> <strong>Category: </strong></font><em><font size="3" color="black">{item.category}</font></em></h6>
                                                    <h5><font size="3" color="black"> Quantity In Stock </font><font size="4" color="red"><em>{item.quantityInStock}</em></font></h5>
                                                    <p className="card-text"><font size="3" color="black">Amount: {item.amount}</font></p>
                                                    <hr />
                                                </div>
                                                <button onClick={() => allFunction(item._id, item)} className="btn btn-warning btn-sm btn-block">Remover from my list</button>
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
                        <button onClick={() => back()} type="button" className="btn btn-danger btn-sm">Back</button>
                    </div>
            }
        </>
    )
}
