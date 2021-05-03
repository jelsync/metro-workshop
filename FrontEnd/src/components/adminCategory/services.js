import Swal from 'sweetalert2';

export const getProductCategory = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/category/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: 'error',
                title: 'Delete',
                text: 'Deleted product!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        return body();
    } catch (error) {
        return error;
    }
}

export const getProduct = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getCategory = async () => {
    try {
        const resp = await fetch(`http://localhost:4000/api/category`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const newProduct = async (data) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product created successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
        return resp;
    } catch (error) {
        return error;
    }
}

export const editProduct = async (id, values) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                description: values.description,
                price: values.price,
                quantityInStock: values.quantityInStock,
                urlImg: values.urlImg
            }),
        });
        const body = await resp.json();
        if (body.nModified == 1) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product edited successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
        return resp;
    } catch (error) {
        return error;
    }
}