export default function Home({ startChat }) {
  // startChat is a prop passed from App component
  return (
    <div>
      <h1>ChatGPT Clone with React.Js</h1>
      <p>Click the button to get started</p>
      <button onClick={startChat}>Start Chatting</button>
    </div>
  );
}
