import { useState } from "react"

export default function Posts() {
    const posts = [
        {
            id: 1,
            imgUser: "./assets/stories/javascript.png",
            nameUser: "javascriptbr",
            imgPost: "./assets/javascriptskills.jpg",
            imgFooter: "./assets/stories/html-language.png",
            userFooter: "lovehtml",
            likesAmount: 24000,
            description: "Principais Hard Skills para se aprender em Javascript."
        },
        {
            id: 2,
            imgUser: "./assets/stories/javascript.png",
            nameUser: "javascriptbr",
            imgPost: "./assets/todoapp-react.jpg",
            imgFooter: "./assets/stories/vue.png",
            userFooter: "vueframework",
            likesAmount: 101523,
            description: "ToDo em react para vocês!"
        },
        {
            id: 3,
            imgUser: "./assets/stories/nodejs.png",
            nameUser: "learnode",
            imgPost: "./assets/post-nodevsjs.jpg",
            imgFooter: "./assets/stories/typescript.png",
            userFooter: "typescriptBR",
            likesAmount: 5000,
            description: "E ai, javascript ou node?"

        }
    ]

    return (
        <div className="posts">
            {posts.map((item) => (
                <Post
                    key={item.id}
                    imgUser={item.imgUser}
                    nameUser={item.nameUser}
                    imgPost={item.imgPost}
                    imgFooter={item.imgFooter}
                    userFooter={item.userFooter}
                    likesAmount={item.likesAmount}
                    description={item.description}
                />
            ))}
        </div>
    )
}



function Post(props) {
    const [isSaved, setIsSaved] = useState(false)
    const [liked, setLiked] = useState(false)
    const [likesAmount, setLikesAmount] = useState(props.likesAmount)
    const [showHeart, setShowHeart] = useState(false);


    const savePost = () => {
        setIsSaved(!isSaved)
    }

    const likePost = () => {
        if (liked) {
            setLiked(false)
            setLikesAmount(likesAmount - 1)
        } else {
            setLiked(true)
            setLikesAmount(likesAmount + 1)
        }
    }

    const likedWithImage = () => {
        if (!liked) {
            setLiked(true)
            setLikesAmount(likesAmount + 1)
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 800);
        }
    }

    function HeartAnimation() {
        return (
          <div className="heart-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="scale"
                  from="0.2"
                  to="1"
                  dur="0.3s"
                  repeatCount="1"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="0.5s"
                  begin="0.5s"
                  repeatCount="1"
                />
              </path>
            </svg>
          </div>
        );
      }
      
      
    return (
        <article data-test="post">
            <div className="post-header">
                <div>
                    <img src={props.imgUser} alt={props.nameUser} />
                    <p>{props.nameUser}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img
                data-test="post-image"
                src={props.imgPost}
                alt={props.nameUser}
                onDoubleClick={likedWithImage}
            />
            {showHeart && <HeartAnimation />}
            <div className="post-icons flex-space-center">
                <div className="bottoms">
                    <ion-icon data-test="like-post" name={liked ? "heart" : "heart-outline"} onClick={likePost} id={liked ? "redColor" : ""}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon data-test="save-post" name={isSaved ? "bookmark" : "bookmark-outline"} onClick={savePost}></ion-icon>
            </div>

            <footer>
                <img src={props.imgFooter} alt={props.userFooter} />
                <p>
                    Curtido por <span className="negrito">{props.userFooter}</span> e
                    <span data-test="likes-number" className="negrito"> outras {likesAmount.toLocaleString('pt-BR')} pessoas</span>
                </p>
            </footer>

            <div className="post-description">
                <p>
                    <span>{props.nameUser}</span> {props.description}
                </p>
            </div>

            <div className="comments">
                <p>Veja todos os 5.286 comentários</p>

                <div className="main-comments">
                    <div className="comment">
                        <div className="comment-users">lovehtml</div>
                        <p>Não esqueçam do básico! Vem pro front 😉</p>
                        <div className="likes">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="main-comments">
                    <div className="comment">
                        <div className="comment-users">npm_install</div>
                        <p>
                            Tudo começa com um npm install, o back nao vai te
                            decepcionar 🐧
                        </p>
                        <div className="likes">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

