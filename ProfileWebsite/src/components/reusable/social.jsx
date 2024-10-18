import "./reusable.scss";
import {Linkedin, Github, Mail} from "lucide-react";

const Social = () => {
    return (
        <div className={"line-component"}>
            <hr/>
            <a target={"_blank"} href={"https://www.linkedin.com/in/cameron-pierce-748189289/"}>
                <Linkedin/>
            </a>
            <a target={"_blank"} href={"https://github.com/CMPierce19"}>
                <Github/>
            </a>
            <a target={"_blank"} href={"mailto:cmpierce19@gmail.com"}>
                <Mail/>
            </a>
            <hr/>
        </div>
    )
}

export default Social;