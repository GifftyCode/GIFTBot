import './App.css';
import gptLogo from './assets/logo.png';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user1.png';
import gptImgLogo from './assets/chatgptLogo.png';

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='logo' className='logo' />
            <span className='brand'>GIFtBot</span>
          </div>

          <button className='midBtn'>
            <img src={addBtn} alt='new chat' className='addBtn' />
            New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'>
              <img src={msgIcon} alt='query' />
              What is Programming ?
            </button>

            <button className='query'>
              <img src={msgIcon} alt='query' />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='Home' className='listItemsImg' />
            Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='Saved' className='listItemsImg' />
            Saved
          </div>
          <div className='listItems'>
            <img src={rocket} alt='rocket' className='listItemsImg' />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='' />
            <p className='txt'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              nostrum sequi facere dolorem cumque. Ut possimus incidunt ad optio
              autem.
            </p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='' />
            <p className='txt'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              nostrum sequi facere dolorem cumque. Ut possimus incidunt ad optio
              autem.
            </p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a Message...' />
            <button className='send'>
              <img src={sendBtn} alt='Send' />
            </button>
          </div>
          <p>
            GIFtBot may produce inaccurate information about people, places, or
            facts. GIFtBot July 23 Version
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
