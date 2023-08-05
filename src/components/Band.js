

function Band(props) {
    return (
        <article>
            <p>{props.name}</p>
            <img src={props.logo} alt={props.logoCredits}></img>
        </article>

    )
}

export default Band