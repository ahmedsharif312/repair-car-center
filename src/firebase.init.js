// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhU3I6H_q-1gfg2Xs-AbqagnrNkQZ94z8",
    // authDomain: "repair-car-center.firebaseapp.com",
    // projectId: "repair-car-center",
    // storageBucket: "repair-car-center.appspot.com",
    // messagingSenderId: "648142577287",
    // appId: "1:648142577287:web:1168b111e0d0e709a2e222"


    // apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;