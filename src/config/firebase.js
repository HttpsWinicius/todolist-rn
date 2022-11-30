import  firebase from "firebase"
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDkO9I17J8Kfc9yz4U8atDqasu6djnXMcA",
    authDomain: "todolist-a482e.firebaseapp.com",
    projectId: "todolist-a482e",
    storageBucket: "todolist-a482e.appspot.com",
    messagingSenderId: "891475667975",
    appId: "1:891475667975:web:cbeae3d3253f5b75518ea2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database
