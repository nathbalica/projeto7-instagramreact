export default function Posts() {
    return (
        <div class="posts">
            <article>
                <div class="post-header">
                    <div>
                        <img src="assets/stories/javascript.png" alt="" />
                        <p>javascriptbr</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <hr />
                <img src="assets/javascriptskills.jpg" />
                <hr />

                <div class="post-icons flex-space-center">
                    <div class="bottoms">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <footer>
                    <img src="./assets/stories/html-language.png" />
                    <p>
                        Curtido por <span class="negrito">lovehtml</span> e
                        <span class="negrito">outras 24.000 pessoas</span>
                    </p>
                </footer>

                <div class="post-description">
                    <p>
                        <span>javascriptbr</span> Principais Hard Skills para se
                        aprender em Javascript.
                    </p>
                </div>

                <div class="comments">
                    <p>Veja todos os 5.286 comentários</p>

                    <div class="main-comments">
                        <div class="comment">
                            <div class="comment-users">lovehtml</div>
                            <p>Não esqueçam do básico! Vem pro front 😉</p>
                            <div class="likes">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div class="main-comments">
                        <div class="comment">
                            <div class="comment-users">npm_install</div>
                            <p>
                                Tudo começa com um npm install, o back nao vai te
                                decepcionar 🐧
                            </p>
                            <div class="likes">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <div class="post-header">
                    <div>
                        <img src="assets/stories/javascript.png" alt="" />
                        <p>javascriptbr</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <video controls autoplay muted>
                    <source
                        src="./assets/Aprendajs.mp4"
                        type="video/mp4"
                        controls
                        autoplay
                        muted
                    />
                    <source
                        src="./assets/Aprendajs.ogv"
                        type="video/ogg"
                        controls
                        autoplay
                        muted
                    />
                </video>

                <div class="post-icons flex-space-center">
                    <div class="bottoms">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <footer>
                    <img src="./assets/stories/vue.png" />
                    <p>
                        Curtido por <span class="negrito">vueframework</span> e
                        <span class="negrito">outras 101.523 pessoas</span>
                    </p>
                </footer>

                <div class="post-description">
                    <p>
                        <span>javascriptbr</span> Evolução do Javascript, gostam da
                        linguagem?
                    </p>
                </div>

                <div class="comments">
                    <p>Veja todos os 30.000 comentários</p>

                    <div class="main-comments">
                        <div class="comment">
                            <div class="comment-users">vueframework</div>
                            <p>Esse eu conheço, meu amigão no top 1!</p>
                            <div class="likes">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <div class="post-header">
                    <div>
                        <img src="./assets/stories/nodejs.png" alt="" />
                        <p>learnode</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img src="./assets/post-nodevsjs.jpg" />

                <div class="post-icons flex-space-center">
                    <div class="bottoms">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <footer>
                    <img src="./assets/stories/typescript.png" />
                    <p>
                        Curtido por <span class="negrito">typescriptBR</span> e
                        <span class="negrito"> outras 5.000 pessoas</span>
                    </p>
                </footer>

                <div class="post-description">
                    <p><span>learnode</span> E ai, javascript ou node?</p>
                </div>

                <div class="comments">
                    <p>Veja todos os 342 comentários</p>

                    <div class="main-comments">
                        <div class="comment">
                            <div class="comment-users">typescriptBR</div>
                            <p>Eu voto no node 😀</p>
                            <div class="likes">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}