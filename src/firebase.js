import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDw17DYtMOxb9t31dkwaczSPbbv2bdkVkw",
    authDomain: "chat-app-ec823.firebaseapp.com",
    projectId: "chat-app-ec823",
    storageBucket: "chat-app-ec823.appspot.com",
    messagingSenderId: "910423390189",
    appId: "1:910423390189:web:fd6fe9a7121ce4158999e4",
    measurementId: "G-3SBHXE6HDJ"  
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;


    