import { useNavigate } from "react-router-dom"
import {MdEmail} from 'react-icons/md'
import {FaLinkedin, FaGithubAlt} from 'react-icons/fa'


export default function Contact () {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }
    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <div id ="contact-page">
                <h1>Contact Me</h1>
                    <div className = "contact-grid">
                        <a href="mailto:yaelkauf29@gmail.com" target="_blank"><div> <MdEmail size={25}/> SEND ME AN EMAIL</div></a>
                        <a href="https://www.linkedin.com/in/yael-kaufman" target="_blank"><div><FaLinkedin size={25}/> CONNECT WITH ME ON LINKEDIN</div></a>
                        <a href="https://www.github.com/ykallday" target="_blank"><div><FaGithubAlt size={25}/> FIND ME ON GITHUB</div></a>
                    </div>
            </div>
        </div>
    )
}