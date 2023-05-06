import NavBar from "./NavBar"
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./SideBar";

export default function Body(){
    return (
        <div>
            <NavBar />
            <div className="content">
                <div className="main">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}


