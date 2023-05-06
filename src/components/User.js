import { useState } from "react"

export default function User( props ) {
    const [userName, setUsername] = useState(props.user)
    const [profileImg, setprofileImg] = useState(props.image)

    const changeUserName = () => {
        const newUserName = prompt("Digite o novo nome de usuario.")
        if(newUserName !== null && newUserName !== undefined && newUserName.trim() !== ""){
            setUsername(newUserName.trim());
        }
    }

    const changeprofileImg = () => {
        const newprofileImg = prompt("Insira o link da nova imagem de perfil")
        if(newprofileImg !== null && newprofileImg !== undefined && newprofileImg.trim() !== ""){
            setprofileImg(newprofileImg.trim());
        }
    }

    return (
        <div className="sidebar-header">
            <img src={profileImg} onClick={changeprofileImg} alt={"userName"} />
            <div>
                <p>{userName}</p>
                <ion-icon name="pencil" onClick={changeUserName}></ion-icon>
            </div>
        </div>
    )
}

