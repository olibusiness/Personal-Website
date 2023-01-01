import './App.css'
import space from '../src/project-imgs/space-lauchc.png'
import study from '../src/project-imgs/study-buddyc.png'
import notes from '../src/project-imgs/oli-notec.png'

function Projects(props) {
    return(
        <div>
            <h2 className='project-title'>My Projects</h2>
            <div className='project-container'>
                
                <div className='img-text'>
                <img src={space} className='project-imgs' alt='rocket tracker project'/>
                <p className='project-text'>This project uses two APIs to retrieve data on rocket launches and space-related news.</p>
                <div className='btn-container'>
                <a href= {props.spaceWeb} class="button" className='btn-grad'>Live Website</a>
                <a href= {props.spaceGit} class="button" className='btn-grad'>GitHub</a>
                </div> 
                </div>

                <div className='img-text'>
                <img src={study} className='project-imgs' alt='Pomodoro timer project'/>
                <p className='project-text'>This project is a Pomodoro timer, a time management tool that separates users work into intervals and short breaks.</p>
                <div className='btn-container'>
                <a href= {props.studyWeb} class="button" className='btn-grad'>Live Website</a>
                <a href= {props.studyGit} class="button" className='btn-grad'>GitHub</a>
                </div>  
                </div>

                <div className='img-text'>
                <img src={notes} className='project-imgs' alt='random notes project'/>
                <p className='project-text'>This project helps me refresh my memory on notes that I have taken while reading through the use of a custom API.
                </p>
                <div className='btn-container'>
                <a href= {props.noteWeb} class="button" className='btn-grad'>Live Website</a>
                <a href= {props.noteGit} class="button" className='btn-grad'>GitHub</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects