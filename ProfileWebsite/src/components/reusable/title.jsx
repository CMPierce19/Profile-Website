import "./reusable.scss";
const Title = ({ title }) => {
    return(
        <div className={"title-container"}>
            <hr/>
            <h1>{title}</h1>
            <hr/>
        </div>
    )
}

export default Title;