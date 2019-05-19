import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDI55u3qUezS3HdHHcHTKL2fQMgLWuGwN0",
    authDomain: "teste-firebase-cbfca.firebaseapp.com",
    databaseURL: "https://teste-firebase-cbfca.firebaseio.com",
    projectId: "teste-firebase-cbfca",
    storageBucket: "teste-firebase-cbfca.appspot.com",
    messagingSenderId: "464244199835",
    appId: "1:464244199835:web:1a56fd35481b2871"
};

firebase.initializeApp(config);

export default firebase;