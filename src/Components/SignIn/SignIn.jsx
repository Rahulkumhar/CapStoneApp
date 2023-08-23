import React, { useState } from 'react';
import { signInWithGooglePopup } from '../../Utils/Firebase/firebase.utils';


const SignIn = () => {

    const logGoogleUser = async()=>{
const response = await signInWithGooglePopup();
console.log('res', response);
    }
    return ( 
        <div>
        <h1> Yupiieee !! we on Sign in Page.</h1>
        <button onClick={logGoogleUser}>
            Sign In with Google
        </button>
        </div>
     );
}
 
export default SignIn;