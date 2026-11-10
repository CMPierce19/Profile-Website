import PropTypes from "prop-types";
import {Wrench, Code} from "lucide-react";
import ProjectCarousel from "./project-carousel.jsx";
import KobyImage from "../../assets/koby-learn.avif";

const ProjectCard = ({title, description, link, tools, languages, image}) => {

    return (
        <div className="project-card-container">
            {link !== "" ? (
                <div className={"card-image"}>
                    <a target={"_blank"} href={link}> <img src={image} alt={title}/></a>
                </div>
            ) : (
                <div className={"card-image"}>
                    <img src={image} alt={title}/>
                </div>
            )}
            <div className={"description"}>
                <div className={"information"}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={"information text-information"}>
                    <div className={"type-components"}>
                        <Wrench className={"icon"}/>
                        {tools.map((text, index) => (
                            <div key={index} style={{margin: "auto 0"}}>
                                <p style={{margin: "0 6px"}}>{text}</p> 
                            </div>
                        ))}
                    </div>
                    <div className={"type-components"}>
                        <Code className={"icon"}/>
                        {languages.map((text, index) => (
                            <div key={index} style={{margin: "auto 0"}}>
                                <p style={{margin: "0 6px"}}>{text}</p> 
                            </div>
                        ))}
                    </div>
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