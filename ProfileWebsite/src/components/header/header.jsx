import {LucideSunMoon} from "lucide-react";
import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {

    const toggleDisplay = () => {
        document.querySelector('body').classList.toggle('light-mode');
    }

    return (
        <div className="header-container">
            <div className="link-bar">
                {/*<Link to="/"><h3>Home</h3></Link>*/}
                <a href="#projects"><h3>Projects</h3></a>
                <a href="#contact"><h3>Contact</h3></a>
                <LucideSunMoon className={"toggle-button"} onClick={toggleDisplay}/>
            </div>
        </div>
    )
}

export default Header