import React from 'react'
import { Link } from 'react-router-dom'

export const RoomScreen = () => {
    return (
        <>
            <div className="container mt-2">
                <h1 className="display-6">Room Screen</h1>
                <div className="row justify-content-md-center">
                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link>
                                <Link to="#" className="card-link">Another link</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link>
                                <Link to="#" className="card-link">Another link</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col home-area m-1">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <svg xmlns="" className="d-block user-select-none" width="100%" height="150" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" />
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link>
                                <Link to="#" className="card-link">Another link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
