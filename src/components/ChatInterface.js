import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import SignOut from './SignOut';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for new messages from Firestore
    const unsubscribe = firestore
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data().message,
        }));
        setMessages(newMessages);
      });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Add the message to Firestore
      firestore.collection('messages').add({
        message: message.trim(),
        timestamp: new Date(),
      });
      setMessage('');
    }
  };

  const handleDeleteMessage = (id) => {
    // Delete the message from Firestore
    firestore.collection('messages').doc(id).delete();
  };

  return (
    <div className="chat-interface">
      <div className="message-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <span>{msg.message}</span>
            <button
              onClick={() => handleDeleteMessage(msg.id)}
              className="delete-button"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>
          <i className="fa fa-arrow-right"></i> Send
        </button>
      </div>
      <SignOut />
    </div>
  );
};

export default ChatInterface;



