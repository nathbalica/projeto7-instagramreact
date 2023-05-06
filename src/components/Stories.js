export default function Stories() {
    const stories = [
        {image: "assets/stories/javascript.png", user: "javascriptbr"},
        {image: "assets/stories/html-language.png", user: "lovehtml"},
        {image: "assets/stories/css-language.png", user: "loucosporcss"},
        {image: "assets/stories/node.png", user: "npm_install"},
        {image: "assets/stories/nodejs.png", user: "learnode"},
        {image: "assets/stories/vue.png", user: "vueframework"},
        {image: "assets/stories/typescript.png", user: "typescriptBR"},
        {image: "assets/stories/angular.png", user: "angular1"},
        {image: "assets/stories/angular.png", user: "angular2"},
        {image: "assets/stories/angular.png", user: "angular3"}
    ]

    return (
        <div className="stories">
            {stories.map((item) => <Story key={item.user} image={item.image} user={item.user} />)}

            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}

function Story(props) {
    return (
        <div>
            <div className="story-img">
                <img src={props.image} alt={props.user} />
            </div>
            <p>{props.user}</p>
        </div>
    )
}