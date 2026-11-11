import "./hero.scss";
import Social from "../reusable/social.jsx";
const Hero = () => {
    return (
        <div className="page-container">
            <div className="hero-container">
                <div className={"trans-container"}>
                    <h1>Cameron Pierce</h1>
                    <h3>ピアス　キャメロン</h3>
                </div>
                <div className={"trans-container"}>
                    <h2>Full Stack Developer / Game Developer</h2>
                    <h3>フルスタック開発者 / ゲーム開発者</h3>
                </div>
                <Social/>
            </div>
        </div>
    )
}

export default Hero;