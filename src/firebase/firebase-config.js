import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyCi_DTpyrMrJOKbzOAuR4nYh3p2Fw8UUEw",
    authDomain: "react-app-curso-e31de.firebaseapp.com",
    projectId: "react-app-curso-e31de",
    storageBucket: "react-app-curso-e31de.appspot.com",
    messagingSenderId: "939305870583",
    appId: "1:939305870583:web:fcced2ca04888514d25ff2"
};

const firebaseConfigTesting = {
    apiKey: "AIzaSyBB6qtclJUgAtMcpUkEpLSlhv_6qi_KWVE",
    authDomain: "test-react-a0ad2.firebaseapp.com",
    databaseURL: "https://test-react-a0ad2-default-rtdb.firebaseio.com",
    projectId: "test-react-a0ad2",
    storageBucket: "test-react-a0ad2.appspot.com",
    messagingSenderId: "631937221595",
    appId: "1:631937221595:web:c517deb1790eec98bbddfe"
};

if( process.env.NODE_ENV === 'test' ){
    // testing
    firebase.initializeApp(firebaseConfigTesting);
}else{
    // dev/prod
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}