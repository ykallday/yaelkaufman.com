import {Route,Routes} from 'react-router-dom'
import AboutMe from './AboutMe'
import Hobbies from './Hobbies'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Experience from './Experience'
import Contact from './Contact'
import HomeGrid from './HomeGrid'

export default function Main(){
    return(
    <Routes>
      <Route exact path='/' element={< HomeGrid />}></Route>  
      <Route path ="/aboutme" element= {<AboutMe/>}/>
      <Route path ="/hobbies" element= {<Hobbies/>}/>
      <Route path ="/portfolio" element= {<Portfolio/>}/>
      <Route path ="/experience/resume" element= {<Resume/>}/>
      <Route path ="/experience" element= {<Experience/>}/>
      <Route path ="/contact-me" element= {<Contact/>}/>
    </Routes>

    )
}