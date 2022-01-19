import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCsU88qnShYMMdD2mdgGN-HjLb3ISh9BaA",
  authDomain: "crwn-db-a6c2f.firebaseapp.com",
  projectId: "crwn-db-a6c2f",
  storageBucket: "crwn-db-a6c2f.appspot.com",
  messagingSenderId: "729323414194",
  appId: "1:729323414194:web:79c70e1dbfb9c66cf11fab",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;