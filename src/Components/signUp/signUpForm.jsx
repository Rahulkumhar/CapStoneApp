import React, { useState } from "react";
import { signUpFormObj } from "../Constents/Constent";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../Firebase/firebase.utils";
import FormInput from "../comonComponents/formInput/formInput";
import { SignUpContainer, SignUpTitle } from "./signUp.style";
import CustomButton from "../comonComponents/customButton/customButton";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpFormObj);
  const { fullName, email, password, confirmPassword } = formFields;

  console.log("fields==>", formFields);

  const submitEmailAndPassword = async (e) => {
    e.preventDefault();
    const resetField = () => {
      setFormFields(signUpFormObj);
    };
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { fullName });
      resetField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already used");
      }
      console.log("user creation encountered error", error.message);
    }
  };
  const signUpFormHandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>don't have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitEmailAndPassword}>
        <FormInput
          type="text"
          name="fullName"
          value={fullName}
          onChange={signUpFormHandle}
          label="Full Name"
          required
        />
        <FormInput
          aria-label="email"
          type="text"
          required
          name="email"
          value={email}
          label="Email"
          onChange={signUpFormHandle}
        />
        <FormInput
          aria-label="password"
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={signUpFormHandle}
        />
        <FormInput
          aria-label="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={signUpFormHandle}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
