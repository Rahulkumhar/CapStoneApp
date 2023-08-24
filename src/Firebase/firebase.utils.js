// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHdgEU4QXDTMn2SM1iG0-PSm6Wd35Ojlk",
  authDomain: "capclothstore-f8ab1.firebaseapp.com",
  projectId: "capclothstore-f8ab1",
  storageBucket: "capclothstore-f8ab1.appspot.com",
  messagingSenderId: "947241730655",
  appId: "1:947241730655:web:fd3df0c7308d8964c2d1ea",
  measurementId: "G-VLJZSLRQLJ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// create document in firestore user data
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { fullName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        fullName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// create email and password method for user data

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
