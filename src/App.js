import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Chat from './components/Chat';
import SignIn from './components/SignIn';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already signed in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Chat App</h1>
      {user ? <Chat user={user} /> : <SignIn />}
    </div>
  );
};

export default App;
