import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDeXeD_EnNoac0UaE_3lsdchLsJEfihNhQ",
  authDomain: "crwn-db-2eb19.firebaseapp.com",
  projectId: "crwn-db-2eb19",
  storageBucket: "crwn-db-2eb19.appspot.com",
  messagingSenderId: "677587886419",
  appId: "1:677587886419:web:3f98e8ff46429dcd1b81a6",
  measurementId: "G-QE6K4QMXHC",
};

export const createUserProfleDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

  // console.log(snapshot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
