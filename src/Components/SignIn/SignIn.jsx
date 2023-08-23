import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../Utils/Firebase/firebase.utils";

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
    </div>
  );
};

export default SignIn;
