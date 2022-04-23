import {MainStore} from "./main";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebaseSetup';
import {action, makeObservable} from "mobx";



export default class AuthStore {

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            register: action,
            logIn: action,
            logOut: action,
        })
    };


    register = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('register success');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('register error');
                // ..
            });
    }

    logIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('login success');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('login error');
            });
    }

    logOut = () => {
        signOut(auth).then(() => {
            console.log('logout success');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log('logout error');
        });
    }
}