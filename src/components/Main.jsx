import {Route,Routes} from 'react-router-dom'
import AboutMe from './AboutMe'
import Hobbies from './Hobbies'
import Portfolio from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import HomeGrid from './HomeGrid'

export default function Main(){
    return(
    <Routes>
      <Route exact path='/' element={< HomeGrid />}></Route>  
      <Route path ="/aboutme" element= {<AboutMe/>}/>
      <Route path ="/hobbies" element= {<Hobbies/>}/>
      <Route path ="/projects" element= {<Portfolio/>}/>
      <Route path ="/resume" element= {<Resume/>}/>
      <Route path ="/contact-me" element= {<Contact/>}/>
    </Routes>

    )
}