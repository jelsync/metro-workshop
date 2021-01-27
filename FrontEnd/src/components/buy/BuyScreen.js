import React from 'react'

export const BuyScreen = () => {
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
                                <h6>Quantity: </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
