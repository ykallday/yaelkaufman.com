import { useNavigate, Link } from "react-router-dom"

export default function AboutMe () {
    let navigate = useNavigate();
    const BackToGrid = () => {
        navigate('/');
    }

    return(
        <div>
            <button className="navigation-btn" onClick={BackToGrid}>Back to Grid</button>
            <div id="about">
                <h1>Hey!</h1>
                <h4>It's nice to meet you.</h4>
                <h4 className = "res-about">My name is Yael, and I'm located in Los Angeles. I’m a full-stack software engineer focusing on front-end development with a background in digital marketing, graphic design, and psychology. I specialize in JavaScript, HTML/CSS and React, which, paired with my detail oriented approach to the creative process and my ability to learn quickly, make me an asset to any team. My incessant curiosity and appreciation for a problem that stumps me continually push me to work toward a world of efficient, beautiful websites and apps people enjoy using. </h4>
                <h5 className = 'res-about'>My previous experience working in digital marketing provided me with a versatile skillset, including but not limited to: positive, clear communication, the ability to handle multiple deadlines simultaneously, time management and organizational skills, and a love for team collaboration. I cannot wait to implement this know-how as I make the move into the software engineering space.</h5>
                <h5 className = 'res-about'>In my spare time, I like to exercise my creative mind with music - whether that be writing it, performing it, recording it, or listening to it. I also love any craft that utilizes my hands - from sculpting to knitting! You can learn more <Link to="/hobbies"><button>here</button></Link></h5>
                <h4>Want to get in touch? <Link to ="/contact-me"><button>Contact me here. </button> </Link></h4>
            </div>
        </div>
    )
}