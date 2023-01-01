import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Skills from './Skills'
import Nav from './Nav'
import Projects from './Projects';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Skills />
    <Projects 
    spaceWeb = 'https://space-launch.pages.dev/'
    spaceGit = 'https://github.com/olibusiness/Mission-control'

    studyWeb = 'https://study-buddy.pages.dev/'
    studyGit = 'https://github.com/olibusiness/Study-buddy'

    noteWeb = 'https://oli-notes.pages.dev/'
    noteGit = 'https://github.com/olibusiness/Oli-notes'
    />

     <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
