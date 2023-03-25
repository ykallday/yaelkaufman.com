import { useNavigate } from "react-router-dom"

export default function Contact () {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }
    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <h1>Contact Me</h1>
        </div>
    )
}