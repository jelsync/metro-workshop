import React from 'react'

export const AdminUserScreen = () => {
    return (
        <div className="container mt-3">
            <h3>Total Sales: $9999.99</h3>
            <table className="table table-hover">
                <thead>
                    <tr className="table-warning">
                        <th scope="col">Id</th>
                        <th scope="col">Number Of Order</th>
                        <th scope="col">Name User</th>
                        <th scope="col">Direction</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">Active</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

