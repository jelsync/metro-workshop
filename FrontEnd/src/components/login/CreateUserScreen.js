import React from 'react'
import { useForm } from '../hooks/useForm'

export const CreateUserScreen = () => {

    const [values, handleInputChange] = useForm({
        name: 'Jelsyn',
        lastName: 'ceron',
        email: 'jelsync@gmail.com',
        password: '123',

    });

    const {name, lastName, email, password} = values; 
     
    const handleCreate = (e) =>{
        e.preventDefault();
        console.log(name, lastName, email, password);
    }


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form onClick = {handleCreate}>
                            <fieldset>
                                <legend>Creater a User</legend>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input type="text" name= "name" className="form-control" placeholder="Name.." value = {name} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input type="text" name= "lastName" className="form-control" placeholder="Last Name.." value = {lastName} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" name= "email" className="form-control" placeholder="Enter email.." value = {email} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value = {password} onChange={handleInputChange}/>
                                </div>
                                <button type="submit"  className="btn btn-primary">Create a user</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
