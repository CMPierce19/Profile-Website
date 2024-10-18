import "./contact.scss"
import Title from "../reusable/title.jsx";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    
    const [state, handleSubmit] = useForm("xanyykbw");
    if (state.succeeded) {
        return <h2 style={{textAlign: "center"}}>Thank you for contacting me!</h2>;
    } 
    
    return (
        <div className={"page-container"}>
            <div className={"contact-container"}>
                <Title title="Contact"/>
                <div className={"contact-form"}>
                    <form onSubmit={handleSubmit}>
                        <h2>Get In Touch</h2>
                        <input type="text" name="name" placeholder="Name"/>
                        <ValidationError name="name" prefix={"Name"} errors={state.errors}/>
                        <input type="email" name="email" placeholder="Email"/>
                        <ValidationError name="email" prefix={"Email"} errors={state.errors}/>
                        <textarea name="description" placeholder="Message"/>
                        <ValidationError name="description" prefix={"Message"} errors={state.errors}/>
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