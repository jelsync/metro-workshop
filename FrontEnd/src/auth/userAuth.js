import { firebase } from '../firebase/firebase-config';

export const userRegister = (email, password, name, lastName) => {
    return(
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                await user.updateProfile({displayName:name});
                console.log(user);
            })
            .catch(e=>{
                console.log(e);
            })
    )
}

export const userLogin = (email, password) => {
    return(
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user);
            })
            .catch(e=>{
                console.log(e);
            })
    )
}