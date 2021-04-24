import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const CategoryScreen = () => {
    let { id } = useParams();

    const [category, setCategory] = useState([])
    const getProductCategory = async () => {
        const resp = await fetch(`http://localhost:4000/api/product/category/${id}`);
        const body = await resp.json();
        setCategory(body);
    }
    useEffect(() => {
        getProductCategory();
    }, [])
// console.log(category);
    return (
        <>
            <div className="container mt-4">
                {/* <h1 className="display-6">{category.category}</h1> */}
                <div className="row justify-content-md-center">
                    {
                        category.map((item) => {
                            return (
                                <div key={item._id} className="col-md-3 m-1 text-dark" >
                                    <div className="col home-area m-1">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{item.name}</h4>
                                                <img src={item.urlImg} width="400px" className="img-fluid" />
                                                <hr />
                                                <h6 className="card-subtitle mb-2">Price: {item.price}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">Category: {item.category}</h6>
                                                <p className="card-text">{item.description}</p>
                                                {/* <button type="button" className="btn btn-link" onClick={handleInfo}>More info</button> */}
                                                {/* <div onClick={() => buy(item)}>{getState(item.spent)}</div> */}
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
