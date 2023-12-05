import React, { useState } from 'react';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (newMessage.trim() !== '') {
      const message = {
        id: Date.now(),
        text: newMessage
      };

      setMessages(prevMessages => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Internal Messaging</h2>

      <div>
        {messages.map(message => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleChange}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messaging;
