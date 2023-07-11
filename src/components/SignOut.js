import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
