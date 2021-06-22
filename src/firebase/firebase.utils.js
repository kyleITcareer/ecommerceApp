import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5QgJFHBHBfPJ9f0EZFnfXvJ7zJXCT1wQ",
    authDomain: "crwn-db-fae2c.firebaseapp.com",
    projectId: "crwn-db-fae2c",
    storageBucket: "crwn-db-fae2c.appspot.com",
    messagingSenderId: "965315982125",
    appId: "1:965315982125:web:87f080dfafdd7d81fb59a4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;