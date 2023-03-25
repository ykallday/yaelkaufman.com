// import { Route, Routes, Link } from 'react-router-dom'
// import HomePage from './HomePage'
// import AboutMe from './AboutMe'
import { Link } from 'react-router-dom'
export default function NavBar(){
    return(
        <div id ="main-Nav">
            <Link to="/aboutme"><button id="aboutMe" >About Me</button></Link>
            <Link to = "/portfolio"><button id ="portfolio"> Portfolio</button></Link>
            <Link to = "/"><h3 id="main-name">YAEL KAUFMAN</h3></Link>
            <Link to = "/experience"><button id ="experience">Experience</button></Link>
            <Link to = "/contact-me"><button id ="contact" >Contact</button></Link>
        </div>
    )
}