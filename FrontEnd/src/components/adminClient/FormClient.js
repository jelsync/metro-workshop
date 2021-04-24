import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const FormClient = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        editClient();
        reset();
    }

    const { id } = useParams();

    useEffect(() => {
        getClient();
    })

    const [values, handleInputChange, loadDataForm, reset] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        buy: ''

    });
    const {name, lastName, email, password, buy} = values;

    const getClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/${id}`);
        const body = await resp.json();
        // const {name} = !!body && body[0];
        loadDataForm(body);
    }
    const editClient = async () => {
        const resp = await fetch(`http://localhost:4000/api/client/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                buy: values.buy
            }),
        });
        const body = await resp.json();
}
return (
    <>
        <div className="container">
            {/* <div className="row justify-content-md-center"> */}
            <div className="col col-lg-6 col-md-8 col-sm-11">
                {/* <div className="box"> */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Edit a Client</legend>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-sm"
                                placeholder="Name.."
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control form-control-sm"
                                placeholder="Last Name.."
                                value={lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control form-control-sm"
                                placeholder="Email.."
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="text"
                                name="password"
                                className="form-control form-control-sm"
                                placeholder="Password.."
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Compras</label>
                            <input
                                type="text"
                                name="buy"
                                className="form-control form-control-sm"
                                placeholder="Vacio"
                                value={buy}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* <button type="submit" className="btn btn-primary">Create</button> */}
                        <button type="submit" className="btn btn-outline-info btn-sm">Aceppt</button>
                        <Link to="/admin/client" type="button" className="btn btn-outline-danger btn-sm">Back</Link>
                    </fieldset>
                </form>
                {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    </>
)
}
