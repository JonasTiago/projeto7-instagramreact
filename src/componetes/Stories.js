function Story() {
  const props = [{
    imagem: 'assets/img/9gag.svg',
    user: '9gag'
  }, {
    imagem: 'assets/img/meowed.svg',
    user: 'meowed'
  },
  {
    imagem: 'assets/img/barked.svg',
    user: 'barked'
  },
  {
    imagem: 'assets/img/nathanwpylestrangeplanet.svg',
    user: 'nathanwpylestrangeplanet'
  },
  {
    imagem: 'assets/img/wawawicomics.svg',
    user: 'awawicomics'
  }, {
    imagem: 'assets/img/respondeai.svg',
    user: 'respondeai'
  },
  {
    imagem: 'assets/img/filomoderna.svg',
    user: 'filomoderna'
  },
  {
    imagem: 'assets/img/memeriagourmet.svg',
    user: 'memeriagourme'
  }
  ]

  return (

    <div class="stories">
      {props.map(item =>
        <div class="story">
          <div class="imagem">
            <img src={item.imagem} />
          </div>
          <div class="usuario">
            {item.user}
          </div>
        </div>
      )}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>

  )

}


export default function Stories() {
  return (
    <Story />
  )
}