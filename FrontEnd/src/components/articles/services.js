import Swal from 'sweetalert2';

export const getCategories = async () => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/category`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProducts = async () => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/product`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const buy = async (uid, product) => {
    try {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Purchased product',
            showConfirmButton: false,
            timer: 1500
        });
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client/${uid}/products`, {
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