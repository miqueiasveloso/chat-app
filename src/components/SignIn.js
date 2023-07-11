import React from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app'; // Import the firebase module separately

const SignIn = () => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <h2>Please sign in to continue</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
