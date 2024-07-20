import { useState } from 'react';

import Message from './Message';
import LoadingIndicator from './LoadingIndicator';

export default function ChatWindows() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const sendMessage = async (userInput) => {
    // add user message to state
    const userMessage = { sender: 'user', text: userInput };
    setMessages([...messages, userMessage]);

    // set loading to true
    setLoading(true);

    try {
      console.log('API call goes here...');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div>
      {/* Display all messages */}
      {messages.map((message, index) => (
        <Message key={index} sender={message.sender} text={message.text} />
      ))}

      {/* Display Loading Indicator */}
      {loading && <LoadingIndicator />}

      {/* Display Input */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
