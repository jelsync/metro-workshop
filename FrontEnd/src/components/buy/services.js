export const getProduct = async (id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/product/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProductClient = async (uid) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client/${uid}/products`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async (uid, id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client/${uid}/products/${id}`, {
            method: 'PUT'
        });
        return resp;
    } catch (error) {
        return error;
    }
}

export const updateProduct = async (product, id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/product/${id}`, {
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
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/category/${id}`)
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProductCategory = async (id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/product/category/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}
