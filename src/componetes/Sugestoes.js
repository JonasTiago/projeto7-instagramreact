function Sugestao(props) {

  return (
    <div>
        <div class="sugestao">
          <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
              <div class="nome">{props.nome}</div>
              <div class="razao">{props.razao}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div> 
    </div>
  )
}


export default function Sugestoes() {

  const props = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      nome: 'bad.vibes.memes',
      razao: 'segue voce'
    },
    {
      imagem: "assets/img/chibirdart.svg",
      nome: 'chibirdart',
      razao: 'segue voce'
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      nome: 'razoesparaacredita',
      razao: 'Novo no Instagram'
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      nome: 'adorable_animals',
      razao: 'segue voce'
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      nome: 'smallcutecats',
      razao: 'segue voce'
    }
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {props.map((item) => <Sugestao imagem={item.imagem} nome={item.nome} razao={item.razao}/>)} 
    </div>
  )
}