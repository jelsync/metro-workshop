import Swal from 'sweetalert2';

export const getClients = async () => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const getClient = async (id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client/${id}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export const deleteClient = async (id) => {
    try {
        const resp = await fetch(`https://metroworkshop.herokuapp.com/api/client/${id}`, {
            method: 'DELETE'
        });
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                icon: 'error',
                title: 'Delete',
                text: 'Deleted customer!'
            })
        }
        return resp();
    } catch (error) {
        return error;
    }
}