import React from 'react'

export const HomeArticlesScreen = () => {
    return (
        <>
            <div className="w-100">
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" to="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" to="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>

            <div className="container mt-2">
                <div className="row justify-content-end">
                    <div className="col col-lg-4 col-md-4 col-sm-4 home-area">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-4 col-md-4 col-sm-4 home-area">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-4 col-md-4 col-sm-4 home-area">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
