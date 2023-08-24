import React, { useState } from "react";
import { signUpFormObj } from "../Constents/Constent";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../Firebase/firebase.utils";

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
    <>
      <h1> Sign up with your email and password</h1>
      <form onSubmit={submitEmailAndPassword}>
        <label> Full Name </label>
        <input
          aria-label="fullName"
          type="text"
          required
          name="fullName"
          value={fullName}
          onChange={signUpFormHandle}
        />
        <label> Email </label>
        <input
          aria-label="email"
          type="text"
          required
          name="email"
          value={email}
          onChange={signUpFormHandle}
        />
        <label> Password </label>
        <input
          aria-label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={signUpFormHandle}
        />
        <label> Confirm Password </label>
        <input
          aria-label="confirmPassword"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={signUpFormHandle}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
