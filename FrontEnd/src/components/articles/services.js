import Swal from 'sweetalert2';
const uid = JSON.parse(localStorage.getItem('uid'));

export const getCategories = async () => {
    try {
        const resp = await fetch(`http://localhost:4000/api/category`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getProducts = async () => {
    try {
        const resp = await fetch(`http://localhost:4000/api/product`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const buy = async (product) => {
    try {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Purchased product',
            showConfirmButton: false,
            timer: 1500
        });
        const resp = await fetch(`http://localhost:4000/api/client/${uid}/products`, {
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