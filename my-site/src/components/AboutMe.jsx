import { useNavigate } from "react-router-dom"

export default function AboutMe () {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }

    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <h1>AboutMe</h1>
        </div>
    )
}