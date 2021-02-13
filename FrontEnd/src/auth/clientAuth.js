import { firebase } from '../firebase/firebase-config';

export const clientRegister = (email, password, name) => {
    return(
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                await user.updateProfile({displayName:name});
                // localStorage.setItem('user', JSON.stringify ([user.uid, user.displayName, user.email] ));
                // localStorage.setItem('user', JSON.stringify (user.uid));
                // localStorage.setItem('user', JSON.stringify (user.name));
            })
            .catch(e=>{
                console.log(e);
            })
    )
}

export const clientLogin = (email, password) => {
    return(
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // localStorage.setItem('user', JSON.stringify (user.uid));
                // console.log(user.uid, user.email);
            })
            .catch(e=>{
                console.log(e);
                <h1>erro</h1>
            })
    )
}

export const LogOutUser = () => {
    return (
        firebase.auth().signOut() 
    )
}
