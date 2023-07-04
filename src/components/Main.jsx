import {Route,Routes} from 'react-router-dom'
import AboutMe from './AboutMe'
import Hobbies from './Hobbies'
import Portfolio from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import HomeGrid from './HomeGrid'
import SoftwareProjects from './SoftwareProjects'
import Digital from './Digital'

export default function Main(){
    return(
    <Routes>
      <Route exact path='/' element={< HomeGrid />}></Route>  
      <Route path ="/aboutme" element= {<AboutMe/>}/>
      <Route path ="/hobbies" element= {<Hobbies/>}/>
      <Route path ="/projects" element= {<Portfolio/>}/>
      <Route path = "/projects/digital" element = {<Digital/>}/>
      <Route path = "/projects/software" element = {<SoftwareProjects/>}/>
      <Route path ="/resume" element= {<Resume/>}/>
      <Route path ="/contact-me" element= {<Contact/>}/>
    </Routes>

    )
}