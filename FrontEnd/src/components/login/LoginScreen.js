import React from 'react'
export const LoginScreen = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form>
                            <fieldset>
                                <legend>Login</legend>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary mr-1">Login</button>
                                <button type="submit" className="btn btn-primary">Create a user</button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}