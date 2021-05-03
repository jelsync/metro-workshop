const uid = JSON.parse(localStorage.getItem('uid'));

export const getProduct = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProductClient = async () => {
    try {
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products/${id}`, {
            method: 'PUT'
        });
        return resp;
    } catch (error) {
        return error;
    }
}

export const updateProduct = async (product, id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        });
        return resp;
    } catch (error) {
        return error;

    }
}

export const getCategories = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/category/${id}`)
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProductCategory = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product/category/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}
