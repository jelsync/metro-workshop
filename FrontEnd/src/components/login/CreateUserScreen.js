import React from 'react'

export const CreateUserScreen = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="login-area col col-lg-6 col-md-8 col-sm-11">
                    <div className="box">
                        <form>
                            <fieldset>
                                <legend>Creater a User</legend>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Name.." />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Last Name.." />
                                </div>
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email.." />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password.." className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Create a user</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
