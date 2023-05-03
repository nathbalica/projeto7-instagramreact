import NavBar from "./NavBar"
import Stories from "./Stories";
// import Posts from "./Posts";
// import Sidebar from "./Sidebar";

export default function Body(){
    return (
        <div>
            <NavBar />
            <div class="content">
                <div class="main">
                    <Stories />
                </div>
            </div>
        </div>
    )
}


