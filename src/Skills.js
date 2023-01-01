import './App.css';
import htmlLogo from '../src/skills-logo/html-logo.webp'
import cssLogo from '../src/skills-logo/css-logo.webp'
import jsLogo from '../src/skills-logo/js-logo.png'
import reactLogo from  '../src/skills-logo/react-logo.png'
import github from '../src/skills-logo/GitHub-text.png'
import bootstrap from '../src/skills-logo/bootstrap-logo.png'
import json from '../src/skills-logo/json-logo.png'
import npm from '../src/skills-logo/npm-logo.png'



function Skills () {

    return(
        <div className='scroll-container'>
            <h2 className='skills-title'>My Skills</h2>
            <div className='scroll-text'>
                <img src= {htmlLogo} className = 'skills-logos' alt='html logo'/>
                <img src= {cssLogo} className = 'skills-logos' alt='css logo'/>
                <img src= {jsLogo} className = 'skills-logos' alt='js logo'/>
                <img src= {reactLogo} className = 'skills-logos' alt='react logo'/>
                <img src= {json} className = 'skills-logo' alt='json logo'/>
                <img src = {github} className = 'Github' alt='github logo'/>
                <img src= {npm} className = 'skills-logos' alt='npm logo'/>
                <img src = {bootstrap} className = 'skills-logos' alt='bootstrap logo'/>
            </div>

        </div>

    )
}

export default Skills;