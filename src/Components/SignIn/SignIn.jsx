import React, { useEffect, useMemo, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../Utils/Firebase/firebase.utils";

const SignIn = () => {
  useMemo(async () => {
    const res = await getRedirectResult(auth);

    if (res) {
      const userDocRef = await createUserDocFromAuth(res.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log("==>", userDocRef);
  };

  return (
    <div>
      <h1> Yupiieee !! we on Sign in Page.</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
