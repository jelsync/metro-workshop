import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2'


export const clientLogin = (email, password) => {
    return(
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                localStorage.setItem('uid', JSON.stringify(user.uid));
                // localStorage.setItem('user', JSON.stringify (user.uid));
                // console.log(user.uid, user.email);
            })
            .catch(e=>{
                // console.log(e);
                Swal.fire('Error', e.message, 'error' );
                
            })
    )
}

export const LogOutUser = () => {
    return (
        firebase.auth().signOut(),
        localStorage.clear()
    )
}
