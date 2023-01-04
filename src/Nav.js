import './App.css'
import github from '../src/skills-logo/github-logo.png'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  return (
    <BrowserRouter>
    <div className='container-nav'>
    <h3 className="heading">Oliver W</h3>
    <Link to = '#home' id='Links'>
      Home
    </Link>

    <Link to = '#projects' id='Links'>
      Projects
    </Link>

    <Link to = '#contact' id='Links'>
      Contact
    </Link>

    <a href='https://github.com/olibusiness'>
    <img src={github} className = 'Github-logo'/>
    </a>
    </div>
    </BrowserRouter>
  )
}

export default Nav;