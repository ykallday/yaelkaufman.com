import aboutMe from "../assets/aboutmeLines.png"
import portfolio from "../assets/portfolioLines.png"
import work from "../assets/experienceLines.png"
import resume from "../assets/resumeLines.png"
import contact from "../assets/contactLines.png"
import hobbies from "../assets/hobbiesLine.png"
import { Link } from 'react-router-dom'

export default function HomeGrid(){
    return(
        <div className = "gridWrapper">
            <div><Link to ="/aboutme"><img src = {aboutMe}/></Link></div>
            <div><Link to ="/portfolio"><img src = {portfolio}/></Link></div>
            <div><Link to ="/experience"><img src = {work}/></Link></div>
            <div><Link to ="/experience/resume"><img src = {resume}/></Link></div>
            <div><Link to ="/contact-me"><img src = {contact}/></Link></div>
            <div><Link to = "/hobbies"><img src = {hobbies}/></Link></div>
        </div>
    )
}