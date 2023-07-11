import React from 'react';
import ChatInterface from './ChatInterface';

const Chat = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <ChatInterface />
    </div>
  );
};

export default Chat;
