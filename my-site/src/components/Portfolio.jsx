import { useNavigate } from "react-router-dom"


export default function (){
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }
    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <h2>Portofolio</h2>
        </div>
    )
}