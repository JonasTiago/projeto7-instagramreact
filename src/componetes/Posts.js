import { useState } from "react"

function MarcadorSalvo(props) {

  const [marcador, setMarcador] = useState(props.name)

  function salvar() {
    const salvo = "bookmark"
    setMarcador(
      (marcador === "bookmark-outline") ? salvo : "bookmark-outline"
    )

  }
  return (
    <ion-icon name={marcador} onClick={salvar}></ion-icon>
  )
}

function ConteudoPost(props) {
  const [curtida, setCurtida] = useState(props.estadoCurtida)
  const [curtidaTotal, setCurtidaTotal] = useState(props.numCurtidas)

  function foiCurtido() {
    const curtido = "heart"
    setCurtida(
      curtida === "heart-outline" ? curtido : "heart-outline"
    )
    maisCurtidas(curtida)
  }

  function maisCurtidas(curtidaFinal) {

    curtidaFinal === "heart-outline" ?
      setCurtidaTotal(
        curtidaTotal + 1
      )
      : setCurtidaTotal(
        curtidaTotal - 1
      )
  }

  return (
    <>
      <div class="conteudo">
        <img src={props.imagem} onClick={foiCurtido} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={curtida} onClick={foiCurtido} class={curtida}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <MarcadorSalvo name={'bookmark-outline'} />
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imageCurtidas} />
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras {curtidaTotal} pessoas</strong>
          </div>
        </div>
      </div>
    </>
  )
}


function Post(props) {

  return (
    <div>
      {props.todosPost.map(item =>
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={item.imageUser} />
              {item.user}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <ConteudoPost imagem={item.conteudo} imageCurtidas={item.imageCurtidas} numCurtidas={item.numeroCurtidas} estadoCurtida={'heart-outline'} />
        </div>

      )}


    </div>

  )
}

export default function Posts() {
  const posts = [
    {
      user: 'meowed',
      imageUser: 'assets/img/meowed.svg',
      conteudo: 'assets/img/gato-telefone.svg',
      imageCurtidas: 'assets/img/respondeai.svg',
      numeroCurtidas: 101
    },
    {
      user: 'barked',
      imageUser: 'assets/img/barked.svg',
      conteudo: 'assets/img/dog.svg',
      imageCurtidas: 'assets/img/adorable_animals.svg',
      numeroCurtidas: 99
    }]

  return (
    <div class="posts">
      <Post todosPost={posts} />
    </div>

  )
}