import React from 'react'
import { Link } from 'react-router-dom'
// import { userRegister } from '../../auth/userAuth'

// const {iud} = userRegister;


export const HomeArticlesScreen = ({ history }) => {
    // const id = JSON.parse(localStorage.getItem('user'));
    // console.log('id de firebase ' + id);

    // useEffect(() => { 
    //     // getClient(id);
    //     // editClient(_id);
    // }, [useState])
    // localStorage.setItem('body', JSON.stringify (body._id));

    // const getClient = async (id) => {
    //     const resp = await fetch(`http://localhost:4000/api/client/${id}`);
    //     const body = await resp.json();
    //     // console.log(body._id);
    //     // setBody(body);
    // }

    // const [body, setBody] = useState(getClient)

    // const {_id} = body;
    // console.log('id Base ' + _id);

    // const uid = JSON.parse(localStorage.getItem('user'));
    // const id = JSON.parse(localStorage.getItem('body'));
    // useEffect(() => {
    // editClient(uid);
    // JSON.parse(localStorage.getItem(iud));
    // }, [useState])

    // const _id = JSON.parse(localStorage.getItem('body'));
    // const editClient = async (_id) => {
    //     // console.log("HOLA "+_id);
    //     // console.log("HOLA "+id);
    //     const resp = await fetch(`http://localhost:4000/api/client/edit/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             uid:id,
    //         }),

    //     });

    //     // setBody(body);

    //     const body = await resp.json();
    //     // console.log(body);
    // }
    // const [body, setBody] = useState(editClient)

    // localStorage.setItem('body', JSON.stringify (body._id));


    // const {name} = body;
    const handleBuy = () => {
        history.push('/BuyScreen');
        // JSON.parse(localStorage.getItem('user', JSON.stringify ({email, name})));

    }
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
                                <button type="button" className="btn btn-link" onClick={handleBuy}>More info</button>
                                <button type="button" className="btn btn-link" onClick={handleBuy}>Buy</button>
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
