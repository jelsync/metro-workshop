import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQmDspBua0m-W6Fb2YoGcpQITu600pm4M",
  authDomain: "metro-workshop-9f325.firebaseapp.com",
  projectId: "metro-workshop-9f325",
  storageBucket: "metro-workshop-9f325.appspot.com",
  messagingSenderId: "672038219913",
  appId: "1:672038219913:web:3b4721933986f6fef79658"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// const auth = firebase.auth();
// export const firestore = firebase.firestore();

export {
  db,
  firebase,
  // auth,
  // firestore
  // fire
} 