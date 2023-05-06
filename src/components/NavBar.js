export default function NavBar(){
    return (
        <header>
            <div className="container desktop">
                <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="assets/logo.png" />
                </div>

                <div className="search">
                <input type="search" name="" id="" placeholder="Pesquisar" />
                </div>

                <div className="icons">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>

            <div className="mobile">
                <div className="logo-icons">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./images/logo.png" alt="" />
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}