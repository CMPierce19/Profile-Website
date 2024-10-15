import PropTypes from "prop-types";
import {Wrench, Code} from "lucide-react";

const ProjectCard = ({title, description, link, tools, languages, image}) => {

    return (
        <div className="project-card-container">
            <a target={"_blank"} href={link}><img src={image} alt={title} onClick={navigation}/></a>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={"type-components"}>
                <Wrench/>
                <div className={"sliding-components"}>
                    {tools.map((tool, index) => (
                        <p key={index} className={"tool-component"}>{tool}</p>
                    ))}
                </div>
            </div>
            <div className={"type-components"}>
                <Code/>
                <div className={"sliding-components"}>
                    {languages.map((language, index) => (
                        <p key={index} className={"language-component"}>{language}</p>
                    ))}
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
    languages: PropTypes.array,
    image: PropTypes.string
}