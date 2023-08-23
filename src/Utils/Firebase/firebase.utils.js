// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRipMzFSuWRIrWzRZ2JbmNFuioYiVZxT4",
  authDomain: "capstone-75ef1.firebaseapp.com",
  projectId: "capstone-75ef1",
  storageBucket: "capstone-75ef1.appspot.com",
  messagingSenderId: "767195526368", //Google project key-767195526368
  appId: "1:767195526368:web:ab9cff7ec944ac09628c85",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
