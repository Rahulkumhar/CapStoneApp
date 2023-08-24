import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../Firebase/firebase.utils";
import SignUpForm from "../signUp/signUpForm";
import NavBarMain from "../NavBarMain/navBarMain";
import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./signIn.style";
import CustomButton from "../comonComponents/customButton/customButton";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log("==>", userDocRef);
  };

  return (
    <>
      <NavBarMain />
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={logGoogleUser} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </SignInContainer>
      <SignUpForm />
    </>
  );
};

export default SignIn;
