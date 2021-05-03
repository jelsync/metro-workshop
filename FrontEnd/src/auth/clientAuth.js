import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2';

export const clientLogin = (email, password) => {
    return (
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                localStorage.setItem('uid', JSON.stringify(user.uid));
                localStorage.setItem('email', JSON.stringify(user.email));
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error');
            })
    )
}

export const LogOutUser = () => {
    return (
        firebase.auth().signOut(),
        localStorage.clear()
    )
}
