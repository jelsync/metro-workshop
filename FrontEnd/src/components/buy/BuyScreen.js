import React from 'react'
import { Link } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter'

export const BuyScreen = () => {

    const { counter, increment, decrement } = useCounter();
    
    return (
        <>
            <div className="container">
                <div className="card mt-3">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={'./assets/img/4.jpg'} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6><strong> Description </strong></h6>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <hr />
                                <h6>Quantity:  {counter}</h6>
                                <button className='btn btn-secondary btn-others' onClick={decrement}> - </button>
                                <button className='btn btn-secondary btn-others' onClick={increment}> + </button>
                            </div>
                            <button type="button" className="btn btn-link" >Buy</button>
                            <Link to="/" type="button" className="btn btn-outline-danger btn-sm btn-block">Back</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
