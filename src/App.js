import './App.css';
import spaceman from '../src/spaceman.png'

function App() {
  return (
    <div className="App">
      <div className='main-text'>
      <h1 className='hi'>Hello!<span className='hand'>👋</span> I am Ollie </h1>
      <p className='bottom-text'>Frontend Engineer</p>
      <p className='about-me'>I am a self-taught frontend engineer. 
      I have a passion for creating visually stunning and user-friendly websites.  
      I am highly adaptable and thrive in fast-paced environments where I can put my problem-solving skills to the test. 
      In my spare time, I enjoy staying up-to-date with the latest web development trends and technologies. 
      Feel free to contact me at anytime</p>
      </div>
      <img src= {spaceman} className='logo' alt='not work'/>
    </div>
    
    
  );
}

export default App;
