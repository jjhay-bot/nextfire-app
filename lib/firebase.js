import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBVMSbSJL4sd-skorq6MD66PJcokiEBJCc",
  authDomain: "nextfire-16e6d.firebaseapp.com",
  projectId: "nextfire-16e6d",
  storageBucket: "nextfire-16e6d.appspot.com",
  messagingSenderId: "732836564285",
  appId: "1:732836564285:web:14002084f343ea43330954"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

