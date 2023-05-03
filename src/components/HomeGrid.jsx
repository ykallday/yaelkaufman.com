import aboutMe from "../assets/aboutmeLines.png"
import projects from "../assets/projects-01.png"
import resume from "../assets/resume-01.png"
import contact from "../assets/contactLines-01.png"
import { Link } from 'react-router-dom'
import {FaHtml5, FaPython, FaReact, FaFigma} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {MdCss} from 'react-icons/md'
import {SiDjango, SiNodedotjs, SiTailwindcss, SiPostgresql, SiSequelize, SiAdobephotoshop, SiAdobeillustrator} from 'react-icons/si'

export default function HomeGrid(){
    return(
        <div>
        <div className = "gridWrapper">
            <div id="grid-about"><Link to ="/aboutme"><img src = {aboutMe}/></Link></div>
            <div id="grid-projects"><Link to ="/projects"><img src = {projects}/></Link></div>
            <div><Link to ="/resume"><img src = {resume}/></Link></div>
            <div><Link to ="/contact-me"><img src = {contact}/></Link></div>
        </div>
        <div>
            <div id ="skills">
                <h2 className="skill-header">Languages / Technologies</h2>
                <div className="icons">
                    <h3 className="icon"><FaHtml5/><span className="skill-caption">HTML</span></h3>
                    <h3  className="icon"><IoLogoJavascript/><span className="skill-caption">JavaScript</span></h3>
                    <h3  className="icon"><SiNodedotjs/><span className="skill-caption">NodeJS</span></h3>
                    <h3  className="icon"><MdCss/><span className="skill-caption">CSS</span></h3>
                    <h3  className="icon"><SiTailwindcss/><span className="skill-caption">Tailwind</span></h3>
                    <h3  className="icon"><FaReact/><span className="skill-caption">React</span></h3>
                    <h3  className="icon"><FaPython/><span className="skill-caption">Python</span></h3>
                    <h3  className="icon"><SiDjango/><span className="skill-caption">Django</span></h3>
                    <h3  className="icon"><SiPostgresql/><span className="skill-caption">PostgreSQL</span></h3>
                    <h3  className="icon"><SiSequelize/><span className="skill-caption">Sequelize</span></h3>
                    <h3 className="icon"><FaFigma/><span className="skill-caption">Figma</span></h3>
                    <h3 className="icon"><SiAdobephotoshop/><span className="skill-caption">Photoshop</span></h3>
                    <h3 className="icon"><SiAdobeillustrator/><span className="skill-caption">Illustrator</span></h3>
                </div>
            </div>
        </div>
        </div>
    )
}