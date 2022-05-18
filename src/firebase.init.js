// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDasKng-zcNnr5vJl_TPa_xY5E5eNaW-pQ",
    authDomain: "to-do-app-1a320.firebaseapp.com",
    projectId: "to-do-app-1a320",
    storageBucket: "to-do-app-1a320.appspot.com",
    messagingSenderId: "370289903951",
    appId: "1:370289903951:web:b9fb235f9b8415b40d5d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;