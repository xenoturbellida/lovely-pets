import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBQRmq9SFfDSVy3ioh9QcGqwgsUxxafmGo",
    authDomain: "our-lovely-pets-288e8.firebaseapp.com",
    databaseURL: "https://our-lovely-pets-288e8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "our-lovely-pets-288e8",
    storageBucket: "our-lovely-pets-288e8.appspot.com",
    messagingSenderId: "824561723950",
    appId: "1:824561723950:web:95324e3bd4e71794118dbf",
    measurementId: "G-N10P5LPFFF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);