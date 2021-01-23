import React from 'react'
import { Link } from 'react-router-dom'

export const HomeArticlesScreen = () => {
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

            <div className="container">
                <div className="row justify-content-md-center">

                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <img src={'./assets/img/2.jpg'} width="100%" height="100%" alt="..." />
                                <hr />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="card-link">More info</Link>
                                <Link to="/" className="card-link">Buy</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="110" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="card-link">Card link</Link>
                                <Link to="/" className="card-link">Another link</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="110" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="card-link">Card link</Link>
                                <Link to="/" className="card-link">Another link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
