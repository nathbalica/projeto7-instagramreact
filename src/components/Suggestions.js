export default function Suggestions() {
    const suggestions = [
        {image: "assets/sidebar/reactjs.png", user: "react.codes.funny"},
        {image: "assets/sidebar/express-fram.png", user: "expressfram"},
        {image: "assets/sidebar/jquery.png", user: "jquerycodes"},
        {image: "assets/sidebar/js.png", user: "jscuriosities"},
        {image: "assets/sidebar/code.png", user: "codesjs"},
    ]
    return (
        <div className="sidebar-area-sugestions">
            <div className="suggestion">
                <p>Sugestão para você</p>
                <p>Ver Tudo</p>
            </div>

            <div className="sidebar-accounts-suggestion">
                {suggestions.map((item) => <Suggestion key={item.user} image={item.image} user={item.user} />)}
            </div>
        </div>
    )
}

function Suggestion(props) {
    return (
        <div className="sidebar-account">
            <div className="account">
                <img src={props.image} alt={props.user} />
                <div>
                    <p>{props.user}</p>
                    <p>Segue você</p>
                </div>
            </div>
            <div>Seguir</div>
        </div>
    )
}