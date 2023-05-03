export default function NavBar(){
    return (
        <header>
            <div class="container desktop">
                <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="assets/logo.png" />
                </div>

                <div class="search">
                <input type="search" name="" id="" placeholder="Pesquisar" />
                </div>

                <div class="icons">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>

            <div class="mobile">
                <div class="logo-icons">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./images/logo.png" alt="" />
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}