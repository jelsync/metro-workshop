import { firebase } from '../firebase/firebase-config';

export const userRegister = (email, password, name) => {
    return(
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                await user.updateProfile({displayName:name});
                // localStorage.setItem('user', JSON.stringify (user.uid));
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
                console.log(user.uid, user.email);
                // localStorage.setItem('user', JSON.stringify (user.uid));
               
            })
            .catch(e=>{
                console.log(e);
            })
    )
}

// export const LogOutUser =() =>{
//     return async() =>{
//         await firebase.auth().signOut();
//         LogOut();
                
//     }
// }
