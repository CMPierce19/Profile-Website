import Title from "../reusable/title.jsx"
import ProjectCard from "./project-card.jsx";
import KobyImage from "../../assets/kobyLearn.png";
import WealthImage from "../../assets/wealthManagement.png";
const Projects = () => {
    return(
        <div>
            <Title title={"Projects"} />
            <div className={"project-card-container"}>
                <ProjectCard 
                    title={"Koby Website"} 
                    description={"A React-built static website for an ESL school that offers localization in English and Japanese."}
                    image={"../../assets/kobyLearn.png"}
                    link={"kobylearn.com"}
                    tools={['React', 'SCSS', 'EmailJS']}
                    languages={['JavaScript', 'CSS']}/>
            </div>
        </div>
    )
}

export default Projects;