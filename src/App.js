import { useState } from 'react';

import Home from './components/Home';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [inChat, setInChat] = useState(false);

  const startChat = () => {
    setInChat(true);
  };

  return <div>{inChat ? <ChatWindow /> : <Home startChat={startChat} />}</div>;
}

export default App;
