import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../Firebase/firebase.utils";
import SignUpForm from "../signUp/signUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log("==>", userDocRef);
  };

  return (
    <div>
      <h1> Yupiieee !! we on Sign in Page.</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
