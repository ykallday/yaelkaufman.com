import { useNavigate, Link } from "react-router-dom"
import cc from '../assets/cc_homepagescreenshot.png'
import bs from '../assets/bookstart.png'
import ou from '../assets/orderup.png'

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