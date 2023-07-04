import { useNavigate, Link } from "react-router-dom"


export default function (){
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }

    return(
        <div>
        <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <div id="project-page">
                <h1>view samples of my work</h1>
                <div className="pre-grid">
                   <Link to = "/projects/software">Software Development</Link>
                   <Link to = "/projects/digital">Digital Marketing & Design</Link>
                </div>
            </div>
        </div>
    )
}