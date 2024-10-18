import "./hero.scss";
import Social from "../reusable/social.jsx";
const Hero = () => {
    return (
        <div className="page-container">
            <div className="hero-container">
                <h1>Cameron Pierce</h1>
                <h2>Full Stack Developer</h2>
                <Social/>
            </div>
        </div>
    )
}

export default Hero;