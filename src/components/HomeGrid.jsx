import aboutMe from "../assets/aboutmeLines.png"
// import portfolio from "../assets/portfolioLines.png"
import projects from "../assets/projects-01.png"
// import work from "../assets/experienceLines.png"
import resume from "../assets/resume-01.png"
import contact from "../assets/contactLines-01.png"
// import hobbies from "../assets/hobbiesLine.png"
import { Link } from 'react-router-dom'

export default function HomeGrid(){
    return(
        <div className = "gridWrapper">
            <div id="grid-about"><Link to ="/aboutme"><img src = {aboutMe}/></Link></div>
       
            <div id="grid-projects"><Link to ="/projects"><img src = {projects}/></Link></div>
            <div><Link to ="/resume"><img src = {resume}/></Link></div>
            <div><Link to ="/contact-me"><img src = {contact}/></Link></div>
        </div>
    )
}