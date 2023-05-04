import { useNavigate, Link } from "react-router-dom"
import cc from '../assets/coping-corner-motion.gif'
import bs from '../assets/CleanShot 2023-05-03 at 11.20.02.gif'
import ou from '../assets/CleanShot 2023-05-04 at 14.12.58.gif'
import sp from '../assets/CleanShot 2023-05-03 at 11.27.32.gif'

export default function (){
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }

    return(
        <div>
        <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <div id="project-page">
                <h1>projects</h1>
                <div className="project-grid">
                    <a href="https://seasonpal.netlify.app/" target="_blank">  
                        <div className="project-card">
                            <h2>SeasonPal</h2>
                            <img src = {sp} width= "100%"/>
                            <h5>A full-stack (Django/Python, React.js/Tailwind) application created to encourage seasonal eating. Still in development! </h5>
                        </div>
                    </a>
                    <a href="https://github.com/ykallday/Coping-Corner-Frontend" target="_blank">  
                        <div className="project-card">
                            <h2>Coping Corner</h2>
                            <img src = {cc} width= "100%"/>
                            <h5>A group project - full-stack application created to develop an online community to share mental health strategies and resources. </h5>
                        </div>
                    </a>
                    <a href="https://github.com/ykallday/BookStart">
                        <div className="project-card">
                            <h2>BookStart</h2>
                            <img src = {bs} width= "100%"/>
                            <h5>A book searching website that utilizes the OpenLibrary API.</h5>
                        </div>
                    </a>
                    <a href="https://github.com/ykallday/Order-Up">
                        <div className="project-card">
                            <h2>Order Up</h2>
                            <img src = {ou} width= "100%"/>
                            <h5>An Interactive ‘bagel shop’ game made with vanilla JavaScript, JavaScript DOM manipulation, HTML, and CSS</h5>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}