import "./reusable.scss";
const Title = ({ title, jTitle }) => {
    return(
        <div className={"title-container"}>
            <hr/>
            <div className={"title-trans-container"}>
                <h3>{jTitle}</h3>
                <h1>{title}</h1>
            </div>
            <hr/>
        </div>
    )
}

export default Title;