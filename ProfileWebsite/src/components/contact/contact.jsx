import "./contact.scss"
import Title from "../reusable/title.jsx";
import { useForm, ValidationError } from "@formspree/react";
import {Mail} from "lucide-react";

const Contact = () => {
    
    const [state, handleSubmit] = useForm("xanyykbw");
    if (state.succeeded) {
        return (
            <div className={"contact-thank"}>
                <Mail className={"contact-icon"}/>
                <h2>Thank you for contacting me!</h2>
            </div>
    );
    } 
    
    return (
        <div className={"page-container"}>
            <div className={"contact-container"} id={"contact"}>
                <Title title="Contact"/>
                <div className={"contact-form"}>
                    <form onSubmit={handleSubmit}>
                        <h2>Get In Touch</h2>
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <textarea name="description" placeholder="Message"/>
                        <button type={"submit"} disabled={state.submitting}>
                            Send
                        </button>
                        <ValidationError errors={state.errors} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;