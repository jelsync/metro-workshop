import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const AdminRoomScreen = () => {
    const [product, setProduct] = useState(null || []);
    // const category = getCategoryProduct(categories);

    useEffect(() => {
        getPoducts();
    }, []);

    const getPoducts = async () => {
        const resp = await fetch(`http://localhost:4000/api/product`);
        const body = await resp.json();
        setProduct(body);
    }
    return (
        <div className="mt-5" >
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
