import PropTypes from "prop-types";
import {Wrench, Code} from "lucide-react";
import ProjectCarousel from "./project-carousel.jsx";
import KobyImage from "../../assets/koby-learn.avif";

const ProjectCard = ({title, description, link, tools, languages, image}) => {

    return (
        <div className="project-card-container">
            <a target={"_blank"} href={link}> <img src={image} alt={title}/></a>
            <div className={"description"}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={"type-components"}>
                    <Wrench className={"icon"}/>
                    <ProjectCarousel components={tools} className={"sliding-components"}/>
                </div>
                <div className={"type-components"}>
                    <Code className={"icon"}/>
                    <ProjectCarousel components={languages} className={"sliding-components"}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    tools: PropTypes.array,
    languages: PropTypes.array
}