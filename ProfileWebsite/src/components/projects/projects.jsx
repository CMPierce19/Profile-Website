import "./projects.scss";
import Title from "../reusable/title.jsx";
import ProjectCard from "./project-card.jsx";
import KobyImage from "../../assets/koby-learn.avif";
import HDMI from "../../assets/HDMI-2.avif";
import Wealth from "../../assets/wealth-manage.avif";


const Projects = () => {
    return (
        <div className={"page-container"}>
            <div className="projects-container" id={"projects"}>
                <Title title={"Projects"}/>
                <div className={"project-cards"}>
                    <ProjectCard
                        title={"Koby Website"}
                        description={"A React-built static website for an ESL school that offers localization in English and Japanese."}
                        image={KobyImage}
                        link={"https://kobylearn.com"}
                        tools={['React', 'SCSS', 'EmailJS']}
                        languages={['JavaScript', 'CSS', 'HTML']}/>
                    <ProjectCard
                        title={"HDMI"}
                        description={"A 3D roguelike game developed using Unity and C#, featuring original artwork and engaging gameplay mechanics."}
                        image={HDMI}
                        link={"https://store.steampowered.com/app/2947430/HDMI/"}
                        tools={['Unity', 'ProCreate']}
                        languages={['C#']}/>
                    <ProjectCard
                        title={"Money Mentor"}
                        description={"A full-stack website that integrates the front end and back end, implementing secure authentication and authorization for seamless user interaction."}
                        image={Wealth}
                        link={""}
                        tools={['React', 'SpringBoot', 'AWS RDS', 'MYSQL']}
                        languages={['JavaScript', 'Java', 'CSS', 'HTML']}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;