function Post() {
  const props = [
    {
      user: 'meowed',
      imageUser: 'assets/img/meowed.svg',
      conteudo: 'assets/img/gato-telefone.svg',
      imageCurtidas: 'assets/img/respondeai.svg',
      numeroCurtidas: 101.523
    },
    {
      user: 'barked',
      imageUser: 'assets/img/barked.svg',
      conteudo: 'assets/img/dog.svg',
      imageCurtidas: 'assets/img/adorable_animals.svg',
      numeroCurtidas: 99.159
    },
    {
      user: 'barked',
      imageUser: 'assets/img/barked.svg',
      conteudo: 'assets/img/dog.svg',
      imageCurtidas: 'assets/img/adorable_animals.svg',
      numeroCurtidas: 99.159
    }]

  return (
    <div>
      {props.map(item =>
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

          <div class="conteudo">
            <img src={item.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={item.imageCurtidas} />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras {item.numeroCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

      )}


    </div>

  )
}

export default function Posts() {

  return (
    <div class="posts">
      <Post />
    </div>

  )
}