import { useNavigate,Link } from "react-router-dom"


export default function Resume () {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }


    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <div id="resume">
                <h1>resume</h1>
                <button id="download"><a href="https://docs.google.com/document/d/1NRHC1KGhazrCMZC6C-HDux1mQRjwDsY9/edit?usp=sharing&ouid=106577412637522211865&rtpof=true&sd=true" target="_blank"> Download Resume Here!</a></button>
                <h5>LOS ANGELES, CA  | YAELKAUF29@GMAIL.COM |  <a href="http://linkedin.com/in/yael-kaufman" target="_blank" alt="linkedin">LINKEDIN</a>  |  <a href="https://www.github.com/ykallday" target="_blank" alt="linkedin">GITHUB</a> </h5>
                <br></br>
                <h4 className="res-title">ABOUT ME:</h4>
                <h5 className = 'res-about'>I'm a front-end software engineer & digital marketer with a passion for clean, concise design. </h5>
                <h4 className="res-title">SKILLS / TECHNOLOGIES:</h4>
                <ul className = "skills">
                    <li><span className="bullet">LANGUAGES / FRAMEWORKS:</span> JavaScript, HTML, CSS, React.js, Node.js/Express, Python</li>
                    <li><span className="bullet">DATABASES: </span> PostgreSQL, SQL, Sequelize</li>
                    <li><span className="bullet">TOOLS / OTHER:</span> Git, Github, Figma, Adobe Creative Cloud, Email Marketing CRM</li>
                </ul>
                <h4 className="res-title">PROFESSIONAL EXPERIENCE:</h4>
                <h4 className="res-work-title">EVOU - FRONT END DEVELOPER</h4>
                <h5 className="res-work-title">june 2023 - present</h5>
                <ul className = "work-bullets">
                    <li>Assisting in the development of an application using React.js and Back4App (noSQL database)
</li>
                    <li>Translating Figma visual designs into code</li>
                    </ul>
                <h4 className="res-work-title">ROBERT KAUFMAN FABRICS - DIGITAL MARKETING LEAD</h4>
                <h5 className="res-work-title">august 2014 - october 2022</h5>
                <ul className = "work-bullets">
                    <li>Promoted from Social Media Coordinator to Digital Marketing Coordinator to Digital Marketing Lead 
</li>
                    <li>Used Adobe Creative Cloud to design and create digital marketing graphics for email, social marketing, and physical marketing collateral to increase brand awareness and drive revenue</li>
                    <li>Generated over $2 million in sales through high-impact email marketing campaigns, utilizing Adobe Photoshop along with Campaign Monitor to design, craft and distribute interactive emails to thousands of customers</li>
                    <li>Increased Instagram following from 11,000 followers to 100,000 followers through custom content</li>
                    <li>Spearheaded and developed a comprehensive, quarterly digital catalog using Adobe Illustrator and dCatalog to better equip our sales team for success, increasing sales and developing a culture of cross collaboration</li>
                </ul>
                <h4 className="res-title">SOFTWARE DEVELOPMENT PROJECTS:</h4>
                <ul className = "software-projects">
                    <li><a href="https://github.com/ykallday/seasonpal_fe/" target="_blank"><span className="bullet">SeasonPal</span></a> SeasonPal - a full stack application created using Django/Python and JavaScript/React.js/TailwindCSS. This application was designed as my capstone project, and I am still adding data to the database I created, but I am proud of the functionality and design, nonetheless! Check back for periodic updates! View the live site <a href="https://seasonpal.netlify.app" target="_blank"> here</a>, the front-end repository <a href="https://github.com/ykallday/seasonpal_fe" target="_blank">here</a>, and back-end repository <a href="https://github.com/ykallday/seasonpal_backend" target="_blank">here</a></li>
                    <li><a href="https://github.com/ykallday/Coping-Corner-Frontend" target="_blank"><span className="bullet">Coping Corner:</span></a> A group project created to develop an online community for mental health strategies and resources. This is a full-stack PERN project developed utilizing PostgreSQL, Sequelize, Express / Node.js, React.js, and CSS. My primary role on this project was Lead Design, and I utilized Figma for my high-level wireframe. This app also utilizes user authentication. View the front-end repository <a href="https://github.com/ykallday/Coping-Corner-Frontend" target="_blank">here</a>, and back-end repository <a href="https://github.com/ykallday/Coping-Corner-Backend" target="_blank">here</a>.</li>
                    <li><a href="https://github.com/ykallday/BookStart" target="_blank"><span className="bullet">BookStart:</span></a> React.js application made using Axios / React.js /JavaScript / HTML / CSS. This project pulls information from various endpoints within the OpenLibrary API. The application features a search bar that permits searches by author/title and genre, as well as a Browse section, and a WishList section for favorite works. I used various React Hooks, including useState, useContext, and useEffect to create this functionality. View the live BookStart site <a href="https://github.com/ykallday/BookStart" target="_blank">here</a>, and the repository <a href="" target="_blank">here</a>.</li>
                    <li><a href="https://github.com/ykallday/Order-Up" target="_blank"><span className="bullet">Order Up:</span></a> An Interactive ‘bagel shop’ game made with vanilla JavaScript, JavaScript DOM manipulation, HTML, and CSS. This game features 3 levels: one free-for-all, one with a time limit, and one with tip depreciation. View the live Order Up site <a href="https://github.com/ykallday/Order-Up" target="_blank">here</a>, and the repository <a href="" target="_blank">here</a>.</li>
                </ul>
                
                <h4 className = "res-title">EDUCATION:</h4>
                <h4 className="res-work-title">General Assembly</h4>
                <ul className = "work-bullets">
                    <li>Software Engineering Immersive Fellow, 2023</li>
                </ul>
                <h4 className="res-work-title">BA in Psychology</h4>
                <ul className = "work-bullets">
                    <li>University of California, Los Angeles (UCLA)</li>
                    <li>Magna Cum Laude</li>
                </ul>
                

            </div>
        </div>
    )
}