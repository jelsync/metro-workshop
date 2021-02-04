import { firebase } from '../firebase/firebase-config';

export const userRegister = (email, password, name, lastName) => {
    return(
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user);
            })
        // firebase.auth().createUser()
        // user.updateProfile({displayName: name});
    )

}