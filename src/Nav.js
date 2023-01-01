import './App.css'
import github from '../src/skills-logo/github-logo.png'

function Nav() {
  return (
    <div className='container-nav'>
    <h3 className="heading">Oliver W</h3>
    <h4 className='parts-nav'>Home</h4>
    <h4 className='parts-nav'>Projects</h4>
    <h4 className='parts-nav'>Contact</h4>
    <a href='https://github.com/olibusiness'>
    <img src={github} className = 'Github-logo'/>
    </a>
    </div>
  )
}

export default Nav;