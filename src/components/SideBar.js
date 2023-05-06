import Suggestions from "./Suggestions"
import User from "./User"

export default function Sidebar() {
    return (
        <aside>
            <div className="sidebar-users-area">
                <User user={"emberjs"} image={"./assets/sidebar/emberjs.png"} />
                <Suggestions />
                <footer>
                    <div className="footer-area-info">
                        <p>Sobre •</p>
                        <p>Ajuda •</p>
                        <p>Imprensa •</p>
                        <p>API •</p>
                        <p>Carreiras •</p>
                        <p>Privacidade •</p>
                        <p>Termos •</p>
                        <p>Localizações •</p>
                        <p>Contas mais relevantes •</p>
                        <p>Hashtags •</p>
                        <p>Idioma</p>
                    </div>
                    <div>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </footer>
            </div>
        </aside>
    )
}