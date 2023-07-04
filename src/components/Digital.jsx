import {useNavigate} from 'react-router-dom'
import email from '../assets/CleanShot 2023-07-04 at 14.26.32.gif'
import catalog from '../assets/D_LN1uNZ.png'
const Digital = () => {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate(-1);
    }
  return (
    <div>
    <button className="navigation-btn" onClick={BackToGrid}>Back</button>
        <div id="project-page">
            <h1>digital marketing</h1>
            <div className="project-grid">
                <a href="https://www.robertkaufman.com/emails/Summer22MFG70822/?utm_medium=email&utm_campaign=MFG%20Release&utm_content=MFG%20Release+Preview+CID_3536299966493f0a780457439db79d42&utm_source=Robert%20Kaufman&utm_term=View%20it%20in%20your%20browser" target="_blank">  
                    <div className="digital-card">
                        <h2>EMAIL MARKETING: B2B & B2C </h2>
                        <h3>Generated over $2 million in sales through high-impact email marketing campaigns, utilizing Adobe Photoshop along with Campaign Monitor to design, craft and distribute interactive emails to thousands of customers </h3>
                        <img src = {email} width="100%" padding="20px"/>
                    </div>
                </a>
                <a href="https://www.dropbox.com/s/f3mmac5ybqaj4kg/Summer2022VC.pdf?dl=0" target="_blank">  
                    <div className="project-card">
                        <h2>CATALOG DESIGN & DEVELOPMENT (VIRTUAL)</h2>
    
                        <h3>Spearheaded and developed a comprehensive, quarterly digital catalog using Adobe Illustrator and dCatalog to better equip our sales team for success, increasing sales and developing a culture of cross collaboration </h3>
                        <img src = {catalog} width="80%"/>
                    </div>
                </a>
                
            

            </div>
        </div>
    </div>
  )
}

export default Digital