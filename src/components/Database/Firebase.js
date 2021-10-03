import firebase from "firebase/app";
import "firebase/auth";

const app= firebase.initializeApp({
    apiKey: "AIzaSyAu-QJ-mc7g4Usx-fEMNILJp0AkiYmchXo",
    authDomain: "hellosuperstars-7b616.firebaseapp.com",
    projectId: "hellosuperstars-7b616",
    storageBucket: "hellosuperstars-7b616.appspot.com",
    messagingSenderId: "954435451043",
    appId: "1:954435451043:web:4bf6274906102437e2a716"
});

const auth= app.auth();
export {auth};

export default app;