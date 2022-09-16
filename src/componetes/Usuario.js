import { useState } from "react"

function Usuarios(props) {

    const [usuario, setUsuario] = useState(props.name)
    const [imagem, setImagem] = useState(props.imagem)

    function usuarioNovo() {
        const novoUsuario = prompt('Qual seu nome ?')
        setUsuario(
            (novoUsuario === '')||(novoUsuario === null) ? usuario : novoUsuario
        )
    }

    function imagemNova() {
        const novaImagem = prompt('Url da sua foto:')
        setImagem(
            (novaImagem === '')||(novaImagem === null) ? imagem : novaImagem
        )
    }


    return (
        <div class="usuario">
            <img src={imagem} onClick={imagemNova}/> 
            <div class="texto">
                <strong>{props.userName}</strong>
                <span>
                    {usuario}
                    <ion-icon name="pencil" onClick={usuarioNovo}></ion-icon>
                </span>
            </div>
        </div>
    )

}

export default function Usuario() {

    return (

        <Usuarios name={"Catana"} imagem={"assets/img/catanacomics.svg"} userName={"catanacomics"} />

    )
}